import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import MainController from './Controllers/MainController'

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(MainController.routes()).use(MainController.allowedMethods());

export {app};