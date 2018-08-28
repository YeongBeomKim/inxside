const {Middleware, Context} = require('koa');
const AWS = require('aws-sdk');
const filesize = require('filesize'); 
const {Painting, PaintingImage} = require('db/models');
const {isUUID} = require('lib/common');
const downloadImage = require('lib/downloadImage')
const mimeTypes = require('mime-types');

const s3 = new AWS.S3({ region: 'ap-northeast-2', signatureVersion: 'v4' });

exports.createSignedUrl = async (ctx) => {
  const { painting_id, filename } = (ctx.request.body);
  //CHECK PAINTING ID EXIST
  if(!painting_id){
    ctx.status = 400;
    ctx.body = {
      name: 'PAINTING_ID_NOT_GIVEN',
    };
    return;
  }
  //CHECK PAINTING ID UUID
  if(!isUUID(painting_id)){
    ctx.status = 400;
    ctx.body = {
      name: 'NOT_UUID',
    };
  }
  // CHECK WHETHER Painting EXISTS
  try{
    const painting = await Painting.findById(painting_id);
    if(!painting) {
      ctx.status = 404;
      ctx.body = {
        name: 'PAINTING_NOT_FOUND',
      };
      return;
    }
  } catch (e) {
    ctx.throw(500,e);
  }
  
  try {
    const contentType = mimeTypes.contentType(filename);
    const paintingImage = new PaintingImage({
      paintingId: painting_id,
      filename: filename,
    });
    const imagePath = `painting-images/${paintingImage.id}/${filename}`;
    paintingImage.path = imagePath;
    await paintingImage.save();

    const url = await s3.getSignedUrl('putObject',{
      Bucket: 'inxside',
      Key: imagePath,
      ContentType: contentType,
    });
    ctx.body = {
      url,
      imagePath,
      id: paintingImage.id,
    };
    console.log(ctx.body);
  } catch(e){
    ctx.throw(500,e);
  };
} 

exports.upload = async (ctx) => {
  const { files, fields } = (ctx.request.body);
  // check whether every parameter exists;
  const { image } = files;
  console.log(image);
  if(!image){
    ctx.body = {
      name: 'FILE_NOT_GIVEN',
    };
    return;
  };
  const { painting_id } = fields;
  if(!painting_id){
    ctx.status = 400;
    ctx.body = {
      name: 'PAINTING_ID_NOT_GIVEN',
    };
    return;
  }
  if (!isUUID(painting_id)){
    ctx.status = 400;
    ctx.body = {
      name: 'NOT_UUID',
    };
    return;
  }

  try {
    const painting = await Painting.findById(painting_id);
    if(!painting) {
      ctx.status = 400;
      ctx.body = {
        name: 'POST_NOT_FOUND',
      };
      return;
    }
  }catch(e){
    ctx.throw(500,e);
  }

  const stats = fs.statSync(image.path);

  if(!stats){
    ctx.throw(500, 'failed to load stats');
    return;
  }
  if (stats.size > 1024 * 1024 * 8){
    ctx.status = 413;
    ctx.body = {
      name: 'FILE_SIZE_EXCEEDS',
      patload: '8MB',
    };
    return
  }
  try {
    const paintingImage = PaintingImage.build({
      paintingId: painting_id,
      filename: image.name,
      filesize: stats.size,
    });
    const imagePath = `painting-images/${paintingImage.id}/${image.name}`;
    paintingImage.path = imagePath;
    const read = fs.createReadStream(image.path);
    const response = await s3
      .upload({
        Bucket: 'inxside',
        Key: imagePath,
        Body: read,
        ContentType: image.type,
      })
      .promise();
    if(!response || !response.ETag) {
      console.log(response);
      ctx.status = 418;
      return;
    }
    paintingImage.save();
    ctx.body = paintingImage.toJSON();
  } catch(e){
    ctx.throw(500,e);
  }
};