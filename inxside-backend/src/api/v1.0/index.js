const Router = require('koa-router');

const painting = require('./painting');

const api =  new Router();

api.use('/painting', painting.routes());

module.exports = api;