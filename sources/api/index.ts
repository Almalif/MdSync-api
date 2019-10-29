import createRouter from "koa-joi-router";

import { Config } from "../config";

import user from "./routes/user";

export default (config: Config): createRouter.Router => {
  const app = createRouter();

  user(app, config);

  app.get("/", (ctx) => {
    ctx.body = "MdSync API";
  });
  return app;
};
