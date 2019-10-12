import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";

import Router from "../api";

import logger from "./logger";

export default (app: Koa): void => {
  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser());

  // Load API routes
  // app.use(Router);
  const router = Router();

  app.use(router.middleware());

  // error handlers
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit("error", err, ctx);
    }
  });

  app.on("error", (err) => {
    logger.error(err.message);
  });
};
