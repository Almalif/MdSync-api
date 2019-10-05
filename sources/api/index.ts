import Router from "koa-router";

import user from "./routes/user";

export default (apiPrefix: string): Router => {
  const app = new Router();
  app.prefix(apiPrefix);

  user(app);

  app.get("/", (ctx) => {
    ctx.body = "MdSync API";
  });
  return app;
};
