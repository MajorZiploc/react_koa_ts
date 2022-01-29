// $ kick-off-koa run program.js 8080
import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';

const app: Koa = new Koa();
const router: Router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = { msg: 'Hello world!' };
  await next();
});

app.use(json());
app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

app.listen(6000, () => {
  console.log('Server started');
});

