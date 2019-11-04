// import socketIo from "socket.io";
import Koa from "koa";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const IO = require("koa-socket-2");

export default (app: Koa) => {
  const io = new IO();

  io.attach(app);

  io.on("connection", (socket: any) => {
    console.log("Connected client on port %s.");
    socket.on("join", (data: any) => {
      if (data.filename) {
        console.log("post");
      }
    });
    socket.on("update", (m: any) => {
      console.log("[server](message): %s", JSON.parse(m));
      socket.emit("update", m);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};
