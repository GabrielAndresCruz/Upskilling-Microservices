import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/errors";

export async function planetValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name } = req.body;

  if (name) return next();
  else throw new CustomError("Planet must have name", 401);
}
