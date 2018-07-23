const Router = require('koa-router');
const AWS = require('aws-sdk');
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


const version = {
    '1.0': require('./v1.0')
};

const api = new Router();

api.use('/v1.0',version['1.0'].routes());

module.exports = api;