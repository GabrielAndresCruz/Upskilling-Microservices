import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const { model } = req.params;

  if (["character", "film", "planet"].includes(model)) {
    next();
  } else {
    throw Error("Invalid model");
  }
};
