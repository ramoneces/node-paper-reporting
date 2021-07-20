/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as ShapesService from "./shapes.service";

/**
 * Router Definition
 */
export const shapesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET rectangle

shapesRouter.get("/rectangle", async (req: Request, res: Response) => {
  try {
    const shape: string = await ShapesService.rectangle();

    res.status(200).contentType("image/svg+xml").send(shape);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

shapesRouter.get("/ellipse", async (req: Request, res: Response) => {
  try {
    const shape: string = await ShapesService.ellipse();

    res.status(200).contentType("image/svg+xml").send(shape);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
