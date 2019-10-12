import Router from "koa-router";

import user from "./routes/user";

export default (): Router => {
  const app = new Router();

  user(app);

  app.get("/", (ctx) => {
    ctx.body = "MdSync API";
  });
  return app;
};
