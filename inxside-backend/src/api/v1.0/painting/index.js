const Router = require('koa-router');
const paintingCtrl = require('./painting.ctrl');

const painting = new Router();

painting.post('/',paintingCtrl.uploadPainting);

module.exports = painting;