import createRouter from "koa-joi-router";
import jwt from "jsonwebtoken";

import UserService from "../../services/userService";
import UserView from "../views/User";

const { Joi } = createRouter;

const router = createRouter();

export default (app: createRouter.Router): createRouter.Router => {
  router.get("/", (ctx) => {
    ctx.body = "Users route";
  });

  router.route({
    method: "post",
    path: "/login",
    validate: {
      body: {
        email: Joi.string()
          .lowercase()
          .email(),
        password: Joi.string()
          .max(100)
          .min(8),
      },
      type: "json",
      output: {
        201: {
          body: {
            token: Joi.string(),
          },
        },
      },
    },
    handler: async (ctx) => {
      const connected = await UserService.login(ctx.request.body);
      if (connected) {
        ctx.status = 201;
        ctx.body = UserView.formatToken(
          jwt.sign({ email: ctx.request.body.email }, process.env.SERCRET_KEY_JWT as string, { expiresIn: "7d" }),
        );
      } else {
        ctx.status = 401;
      }
    },
  });

  router.route({
    method: "post",
    path: "/",
    validate: {
      body: {
        email: Joi.string()
          .lowercase()
          .email(),
        password: Joi.string()
          .max(100)
          .min(8),
      },
      type: "form",
      output: {
        201: {
          body: {
            email: Joi.string(),
          },
        },
      },
    },
    handler: async (ctx) => {
      const user = await UserService.register(ctx.request.body);
      ctx.status = 201;
      ctx.body = UserView.formatUser(user);
    },
  });

  app.use("/users", router.middleware());
  return app;
};
