require('dotenv').config();

const {
    PORT: port
} = process.env;

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');

const db = require('./db');

const api = require('./api');

db.connect();

const app = new Koa;

app.use(compress());
app.use(bodyParser());

const router = new Router();
// router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port,() => {
    console.log(`inxsid-backend server is listening to port ${port}`)
});