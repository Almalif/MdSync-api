import createRouter from "koa-joi-router";

import user from "./routes/user";
import file from "./routes/file";

export default (): createRouter.Router => {
  const app = createRouter();

  app.get("/", (ctx) => {
    ctx.body = "MdSync API";
  });

  user(app);
  file(app);

  return app;
};
