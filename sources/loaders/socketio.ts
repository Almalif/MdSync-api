import { Server } from "http";

import socketIO from "socket.io";

import logger from "./logger";

export default (httpServer: Server): void => {
  const io = socketIO(httpServer);

  io.on("connection", (socket: socketIO.Socket) => {
    logger.info("a user is connected");

    socket.on("join", (roomId: string) => {
      socket.join(roomId);
    });

    socket.on("update", (roomId: string, text: string) => {
      io.to(roomId).emit("update", text);
    });

    socket.on("disconnect", () => {
      logger.info("Client disconnected");
    });
  });
};
