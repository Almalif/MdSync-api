import Koa from "koa";
import { Container } from "typedi";

import Config from "../config";

import databaseLoader from "./database";
import koaLoader from "./koa";

export default (app: Koa): void => {
  const config = Container.get(Config).get();

  databaseLoader(config.MONGODB_URI);
  koaLoader(app);
};
