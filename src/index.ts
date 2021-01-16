import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import MainController from './Controllers/MainController'
import {KoaLogger} from "./Middlewares/KoaLogger";

const app = new Koa();

app.use(KoaLogger());
app.use(cors());
app.use(bodyParser());
app.use(MainController.routes()).use(MainController.allowedMethods());

export {app};