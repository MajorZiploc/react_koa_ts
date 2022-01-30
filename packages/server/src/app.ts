import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';

const app: Koa = new Koa();
const router: Router = new Router();

import movieController from './movie/movie.controller';

app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(movieController.routes());
app.use(movieController.allowedMethods());

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello world!' };
  await next();
});
app.use(router.routes()).use(router.allowedMethods());

app.listen(6000, () => {
  console.log('Server started');
});

export default app;
