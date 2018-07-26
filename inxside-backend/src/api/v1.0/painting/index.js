const Router = require('koa-router');
const paintingCtrl = require('./painting.ctrl');

const painting = new Router();

painting.post('/',paintingCtrl.uploadPainting);
painting.patch('/:id',paintingCtrl.editPainting);
painting.delete('/:id',paintingCtrl.deletePainting);
painting.get('/list',paintingCtrl.parsePaintings);
painting.get('/:id',paintingCtrl.setPainting);

module.exports = painting;