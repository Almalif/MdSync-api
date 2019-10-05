import Router from "koa-router";

const router = new Router();

export default (app: Router): Router => {
  router.get("/", (ctx) => {
    ctx.body = "Users route";
  });

  app.use("/users", router.routes());
  return app;
};
