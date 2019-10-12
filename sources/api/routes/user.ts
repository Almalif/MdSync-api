import createRouter from "koa-joi-router";

const router = createRouter();

export default (app: createRouter.Router): createRouter.Router => {
  router.get("/", (ctx) => {
    ctx.body = "Users route";
  });

  app.use("/users", router.middleware());
  return app;
};
