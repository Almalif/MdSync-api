import Koa from "koa";

import { getEnvVarOrThrow } from "../utils/getEnvVar";

import koaLoader from "./koa";
import databaseLoader from "./database";

export default (app: Koa): void => {
  databaseLoader(getEnvVarOrThrow("DATABASE_URL"));
  koaLoader(app);
};
