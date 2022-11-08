import environtment from "./loadEnvirontment.js";
import debugCreator from "debug";
import chalk from "chalk";
import app from "./server/app.js";
import connectDatabase from "./database/index.js";
import startServer from "./server/index.js";

const debug = debugCreator("robots: root");

const defaulPort = 4000;

const port = environtment.port ?? defaulPort;
const { mongoDbUrl } = environtment;

try {
  await startServer(app, Number(port));
  debug(chalk.yellow(`Server listening on: http://localhost:${port}`));

  await connectDatabase(mongoDbUrl);
  debug(chalk.green("Connection to database was successfull"));
} catch (error: unknown) {
  debug(chalk.red("Error on starting the API", (error as Error).message));
}
