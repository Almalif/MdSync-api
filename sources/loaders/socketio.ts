import Koa from "koa";

import logger from "./logger";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const IO = require("koa-socket-2");

export default (app: Koa): void => {
  const io = new IO();

  io.attach(app);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  io.on("connection", (socket: any) => {
    logger.info("Connected client on port");

    socket.on("join", (roomId: string) => {
      socket.join(roomId);
    });

    socket.on("update", (roomId: string, content: string) => {
      socket.to(roomId).emit("update", content);
    });

    socket.on("disconnect", () => {
      logger.info("Client disconnected");
    });
  });
};
