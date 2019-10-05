import Koa from "koa";

import loader from "./loaders";
import logger from "./loaders/logger";

const port = 3000;

const app = new Koa();

loader(app);

app.listen(port, () => {
  logger.info(`server is running on port ${port}`);
});
