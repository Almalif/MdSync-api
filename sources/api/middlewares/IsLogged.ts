import jwt from "koa-jwt";
import { Container } from "typedi";

import Config from "../../config";

/**
 * @brief This middleware handles jwt checks, and stores the user in ctx.state.user on success
 */
export default (): jwt.Middleware => {
  const config = Container.get(Config).get();

  return jwt({ secret: config.SECRET_KEY_JWT });
};
