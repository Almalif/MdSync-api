import Koa from "koa";

import koaLoader from "./koa";

export default (app: Koa): void => {
  koaLoader(app);
};
