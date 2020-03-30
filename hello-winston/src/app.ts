import { AddressInfo } from 'net';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as BodyParser from 'koa-bodyparser';
import { logger } from './logger';
const app = new Koa();
const router = new Router();
const bodyParser = BodyParser();


router.all('/authorisation', authorisation);
router.get('/', helloWinston);

// app.use(helloWinston);
app.use(bodyParser);
app.use(router.routes())
    .use(router.allowedMethods());

let server = app.listen(process.env.PORT || 4000);
logger.info(`Listening on port ${(<AddressInfo>server.address()).port}`);

function helloWinston(ctx: any) {
    logger.warn(JSON.stringify(ctx));
    let date = new Date(Date.now());
    let str = `/ @ ${date.toUTCString()}`;
    logger.info(str);
    ctx.body = str;
}

function authorisation(ctx: any) {
    logger.warn(JSON.stringify(ctx));
    logger.warn(JSON.stringify(ctx.request.body));
    let date = new Date(Date.now());
    let str = `/authorisation @ ${date.toUTCString()}`;
    logger.info(str);
    ctx.body = str;
}
