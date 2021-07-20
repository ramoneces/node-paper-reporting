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

// GET ellipse

shapesRouter.get("/ellipse", async (req: Request, res: Response) => {
  try {
    const shape: string = await ShapesService.ellipse();

    res.status(200).contentType("image/svg+xml").send(shape);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET polygon/:sides

shapesRouter.get("/polygon/:sides", async (req: Request, res: Response) => {
  try {
    const sides: number = parseInt(req.params.sides, 10);

    const shape: string = await ShapesService.polygon(sides);

    res.status(200).contentType("image/svg+xml").send(shape);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET star/:points

shapesRouter.get("/star/:points", async (req: Request, res: Response) => {
  try {
    const points: number = parseInt(req.params.points, 10);

    const shape: string = await ShapesService.star(points);

    res.status(200).contentType("image/svg+xml").send(shape);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
