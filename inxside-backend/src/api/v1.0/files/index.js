const Router = require('koa-router');
const filesCtrl = require('./files.ctrl');

const files = new Router();

files.post('/upload',filesCtrl.upload);

module.exports = files;