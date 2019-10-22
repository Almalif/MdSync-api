import Koa from "koa";

import { Config } from "../config";

import koaLoader from "./koa";
import databaseLoader from "./database";

export default (app: Koa, config: Config): void => {
  databaseLoader(config.DATABASE_URL);
  koaLoader(app);
};
