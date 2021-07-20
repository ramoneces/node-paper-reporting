import HttpException from "../common/http-exception";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || error.status || 500;

  response.status(status).send(error);
};

/*
It's important to note that you must provide four arguments to identify a function as 
an error-handling middleware function in Express. You must specify the next object to 
maintain the error-handling signature even if you don't use it. Otherwise, Express 
interprets the next object as a regular middleware function, and it won't handle any 
errors.
*/
