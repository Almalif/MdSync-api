import createRouter from "koa-joi-router";
import jwt from "jsonwebtoken";
import { Container } from "typedi";

import UserService from "../../services/userService";
import Config from "../../config";

const { Joi } = createRouter;

const router = createRouter();

export default (app: createRouter.Router): createRouter.Router => {
  const config = Container.get(Config).get();

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
      type: "form",
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
        ctx.body = {
          token: jwt.sign({ email: ctx.request.body.email }, config.SECRET_KEY_JWT as string, { expiresIn: "7d" }),
        };
      } else {
        ctx.status = 401;
        throw new Error("Unable to connect");
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
      try {
        const user = await UserService.register(ctx.request.body);
        ctx.status = 201;
        ctx.body = {
          email: user.email,
        };
      } catch (e) {
        ctx.status = 400;
        throw new Error("Unable to create user");
      }
    },
  });

  app.use("/users", router.middleware());
  return app;
};
