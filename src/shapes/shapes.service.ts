/**
 * Data Model Interfaces
 */
import paper from "paper";
import fs from "fs";
import * as dotenv from "dotenv";
import logger from "../common/logger";

dotenv.config();

/**
 * Variables
 */

const BACKGROUND_COLOR = new paper.Color(
  process.env.BACKGROUND_COLOR as string
);
const FILL_COLOR = new paper.Color(process.env.FILL_COLOR as string);
const STROKE_COLOR = new paper.Color(process.env.STROKE_COLOR as string);
const STROKE_WIDTH: number = parseInt(process.env.STROKE_WIDTH as string, 10);

/**
 * Service Methods
 */
export const rectangle = async (): Promise<string> => {
  const size = setupProject();

  new paper.Path.Rectangle({
    point: new paper.Point(size.width * 0.25, size.height * 0.25),
    size: new paper.Size(size.width * 0.5, size.height * 0.5),
    fillColor: FILL_COLOR,
    strokeColor: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH,
  });

  const svg = paper.project.exportSVG({ asString: true }) as string;

  saveFile(svg, "Rectangle");

  return svg;
};

export const ellipse = async (): Promise<string> => {
  const size = setupProject();

  new paper.Path.Ellipse({
    point: new paper.Point(size.width * 0.25, size.height * 0.25),
    size: new paper.Size(size.width * 0.5, size.height * 0.5),
    fillColor: FILL_COLOR,
    strokeColor: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH,
  });

  const svg = paper.project.exportSVG({ asString: true }) as string;

  saveFile(svg, "Ellipse");

  return svg;
};

export const polygon = async (sides: number): Promise<string> => {
  const size = setupProject();

  new paper.Path.RegularPolygon({
    center: new paper.Point(size.width * 0.5, size.height * 0.5),
    radius: size.width * 0.25,
    sides: sides,
    fillColor: FILL_COLOR,
    strokeColor: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH,
  });

  const svg = paper.project.exportSVG({ asString: true }) as string;

  saveFile(svg, "Polygon");

  return svg;
};

export const star = async (points: number): Promise<string> => {
  const size = setupProject();

  new paper.Path.Star({
    center: new paper.Point(size.width * 0.5, size.height * 0.5),
    radius1: size.width * 0.25,
    radius2: size.width * 0.1,
    points: points,
    fillColor: FILL_COLOR,
    strokeColor: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH,
    strokeJoin: "round",
  });

  const svg = paper.project.exportSVG({ asString: true }) as string;

  saveFile(svg, "Star");

  return svg;
};

/**
 * Private methods
 */
const setupProject = (): paper.Size => {
  const size = new paper.Size(800, 600);
  paper.setup(size);
  new paper.Path.Rectangle({
    point: new paper.Point(0, 0),
    size: size,
    fillColor: BACKGROUND_COLOR,
  });
  return size;
};

const saveFile = (svg: string, type: string): string => {
  const dirName = `generated_shapes/${type}`;
  fs.mkdirSync(dirName, { recursive: true });

  const fileName = `${dirName}/${new Date().valueOf()}.svg`;
  fs.writeFileSync(fileName, svg);

  logger.info(`'${fileName}' file created.`);
  return fileName;
};
