const Router = require('koa-router');

const painting = require('./painting');
const files = require('./files');

const api =  new Router();

api.use('/painting', painting.routes());
api.use('/files', files.routes());

module.exports = api;