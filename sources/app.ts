import Koa from "koa";

import config from "./config";
import loader from "./loaders";
import logger from "./loaders/logger";

const port = process.env.PORT || 3000;

const app = new Koa();

config();

loader(app);

app.listen(port, () => {
  logger.info(`server is running on port ${port}`);
});
