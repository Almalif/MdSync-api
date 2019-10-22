import createRouter from "koa-joi-router";

import user from "./routes/user";

export default (): createRouter.Router => {
  const app = createRouter();

  user(app);

  app.get("/", (ctx) => {
    ctx.body = "MdSync API";
  });
  return app;
};
