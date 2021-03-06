import winston from "winston";
import * as dotenv from "dotenv";

dotenv.config();

const LOG_FILE_PATH = process.env.LOG_FILE_PATH as string;

const consoleFormat = winston.format.combine(
  winston.format.colorize({
    all: true,
  }),
  winston.format.timestamp({
    format: "HH:MM:SS",
  }),
  winston.format.printf(
    (info) => `[${info.level}] ${info.timestamp} ${info.message}`
  )
);

const fileFormat = winston.format.combine(
  winston.format.simple(),
  winston.format.timestamp({
    format: "YYYY-MM-DD HH:MM:SS",
  }),
  winston.format.printf(
    (info) => `[${info.level}] ${info.timestamp} ${info.message}`
  )
);

export default winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({
      format: consoleFormat,
    }),
    new winston.transports.File({
      filename: LOG_FILE_PATH,
      format: fileFormat,
    }),
  ],
});
