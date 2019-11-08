import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";

import Router from "../api";

import logger from "./logger";
import internationalization from "./internationalization";

export default (app: Koa): void => {
  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser());

  internationalization(app);

  // Load API routes
  // app.use(Router);
  const router = Router();

  // error handlers
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      logger.info("ERROR");
      ctx.status = err.status || 500;
      logger.info(ctx.t);
      ctx.body = ctx.t(err.message);
    }
  });

  app.use(router.middleware());
};
