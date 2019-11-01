import createRouter from "koa-joi-router";

import IsLogged from "../middlewares/IsLogged";
import FileService from "../../services/fileService";
import { FileInputDTO } from "../../interfaces/File";

const { Joi } = createRouter;

const router = createRouter();

export default (app: createRouter.Router): createRouter.Router => {
  // Middlewares below this line are only reached if JWT token is valid
  router.use(IsLogged());

  router.route({
    method: "get",
    path: "/:file",
    validate: {
      params: {
        file: Joi.string().min(1),
      },
      output: {
        200: {
          body: {
            id: Joi.string(),
            name: Joi.string(),
            content: Joi.string(),
          },
        },
      },
    },
    handler: async (ctx) => {
      const fileId = ctx.request.params.file;

      const file = await FileService.findFileFromId(fileId);
      if (!file) {
        ctx.status = 404;
        throw new Error(`File with id ${fileId} not found`);
      }

      ctx.status = 200;
      ctx.body = {
        id: file.id,
        name: file.name,
        content: file.content,
      };
    },
  });

  router.route({
    method: "post",
    path: "/",
    validate: {
      body: {
        name: Joi.string()
          .max(100)
          .min(1),
      },
      type: "form",
      output: {
        201: {
          body: {
            id: Joi.string(),
          },
        },
      },
    },
    handler: async (ctx) => {
      const createdFile = await FileService.createFile(ctx.request.body as FileInputDTO);

      ctx.status = 201;
      ctx.body = {
        id: createdFile.id,
      };
    },
  });

  router.route({
    method: "put",
    path: "/:file",
    validate: {
      body: {
        name: Joi.string()
          .max(100)
          .min(1),
        content: Joi.string(),
      },
      type: "form",
      output: {
        200: {
          body: Joi.string(),
        },
      },
    },
    handler: async (ctx) => {
      const fileId = ctx.request.params.file;

      const updatedFile = await FileService.updateFile(fileId, ctx.request.body as FileInputDTO);
      if (!updatedFile) {
        ctx.status = 404;
        throw new Error(`File with id ${fileId} not found`);
      }

      ctx.status = 200;
      ctx.body = "Updated successfully";
    },
  });

  app.use("/files", router.middleware());
  return app;
};
