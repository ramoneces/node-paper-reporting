/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";
import { shapesRouter } from "./shapes/shapes.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import logger from "./common/logger";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu/items", itemsRouter);
app.use("/api/drawing/shapes", shapesRouter);

// Cannot define any routes below error handler
app.use(errorHandler);
// Error handler does not catch 404 errors, so the last middleware is the not found handler
app.use(notFoundHandler);

/**
 * Server Activation
 */

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
