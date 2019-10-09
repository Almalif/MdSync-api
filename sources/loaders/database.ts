import mongoose from "mongoose";

import Logger from "./logger";

export default (db: string): void => {
  const connect = (): void => {
    Logger.info(db);
    mongoose
      .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(() => Logger.info(`Successfully connected to ${db}`))
      .catch((error) => {
        Logger.error("Error connecting to database: ", error);
        return process.exit(1);
      });
  };
  connect();
};
