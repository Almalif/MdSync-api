import Koa from "koa";

import loadConfig from "./config";
import loader from "./loaders";
import logger from "./loaders/logger";

const port = process.env.PORT || 3000;

if (!process.env.SERCRET_KEY_JWT) {
  logger.error("SERCRET_KEY_JWT is missing in env parameters");
  process.exit(84);
}

const app = new Koa();

const config = loadConfig();

loader(app, config);

app.listen(port, () => {
  logger.info(`server is running on port ${port}`);
});
