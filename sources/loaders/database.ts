import mongoose from "mongoose";

import Logger from "./logger";

export default (db: string): void => {
  try {
    mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true });
    Logger.info("Successfully connected to mongo");
  } catch (error) {
    Logger.error("Error connecting to database: ", error);
    process.exit(1);
  }
};
