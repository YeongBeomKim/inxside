const Router = require('koa-router');
const paintingCtrl = require('./painting.ctrl');

const painting = new Router();

painting.post('/',paintingCtrl.uploadPainting);
painting.patch('/:id',paintingCtrl.editPainting);
painting.delete('/:id',paintingCtrl.deletePaining);
painting.get('/list',paintingCtrl.parsePainting);
painting.get('/:id',paintingCtrl.showPainting);

module.exports = painting;