const {Middleware, Context} = require('koa');
const AWS = require('aws-sdk');
const filesize = require('filesize'); 
const {Painting, PaintingImage} = require('db/models');
const {isUUID} = require('lib/common');
const downloadImage = require('lib/downloadImage')
const mimeTypes = require('mime-types');
require('dotenv').config();

const {
  AWS_ACCESS_KEY_ID: awsAccessKeyId,
  AWS_SECRET_ACCESS_KEY: awsSecretAccessKey
} = process.env;

new AWS.Config({
  "accessKeyId": "AWS_ACCESS_KEY_ID",
  "secretAccessKey": "AWS_SECRET_ACCESS_KEY",
  "region": "ap-northeast-2"
})
const s3 = new AWS.S3({ region: 'ap-northeast-2', signatureVersion: 'v4' });

exports.upload = async (ctx) => {
  console.log(s3);
  s3.putObject({Bucket: 'inxside', Key: 'kkk', Body: "helloworld"}, (err,data) =>{
    if(err){
      console.log(err);
      return;
    }
    console.log("good?",data);
  })
}
// exports.createSignedUrl = async (ctx) => {
//   const { painting_id, filename } = (ctx.request.body);
//   //CHECK PAINTING ID EXIST
//   if(!painting_id){
//     ctx.status = 400;
//     ctx.body = {
//       name: 'PAINTING_ID_NOT_GIVEN',
//     };
//     return;
//   }
//   //CHECK PAINTING ID UUID
//   if(!isUUID(painting_id)){
//     ctx.status = 400;
//     ctx.body = {
//       name: 'NOT_UUID',
//     };
//   }
//   // CHECK WHETHER Painting EXISTS
//   try{
//     const painting = await Painting.findById(painting_id);
//     if(!painting) {
//       ctx.status = 404;
//       ctx.body = {
//         name: 'PAINTING_NOT_FOUND',
//       };
//       return;
//     }
//   } catch (e) {
//     ctx.throw(500,e);
//   }
  
//   try {
//     const contentType = mimeTypes.contentType(filename);
//     const paintingImage = new PaintingImage({
//       paintingId: painting_id,
//       filename: filename,
//     });
//     const imagePath = `painting-images/${paintingImage.id}/${filename}`;
//     paintingIamge.path = imagePath;
//     await paintingImage.save();
//     const url = await s3.getsignedUrl('putObject',{
//       Bucket: 'inxside',
//       Key: imagePath,
//       ContentType: contentType,
//     })
//   }

// }

//     try {
//       const contentType = mimeTypes.contentType(filename);
//       const postImage = PostImage.build({
//         fk_post_id: post_id,
//         fk_user_id: ctx.user.id,
//       });
//       const imagePath = `post-images/${ctx.user.username}/${postImage.id}/${filename}`;
//       postImage.path = imagePath;
//       await postImage.save();
//       const url = await s3.getSignedUrl('putObject', {
//         Bucket: 's3.images.velog.io',
//         Key: imagePath,
//         ContentType: contentType,
//       });
//       ctx.body = {
//         url,
//         imagePath,
//         id: postImage.id,
//       };
//     } catch (e) {
//       ctx.throw(500, e);
//     }
// }
  