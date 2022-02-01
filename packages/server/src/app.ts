import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';

const app: Koa = new Koa();
const router: Router = new Router();

import movieController from './movie/movie.controller';

app.use(json());
app.use(logger());
app.use(bodyParser());
const corsOptions: cors.Options = {
  origin: (ctx: Koa.Context) => {
    // ctx.set('Access-Control-Allow-Origin', '*');
    // ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    return `${process.env.APP_PUBLIC_URL}:${process.env.CLIENT_PORT}`;
    //return "*";
  }

}
app.use(cors(corsOptions));

app.use(movieController.routes());
app.use(movieController.allowedMethods());

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello world!' };
  await next();
});
app.use(router.routes()).use(router.allowedMethods());

export default app;
