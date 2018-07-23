const Router = require('koa-router');
const filesCtrl = require('./files.ctrl');

const files = new Router();

files.post('/upload',filesCtrl.upload);
files.post('/create-url',filesCtrl.createSignedUrl);

module.exports = files;