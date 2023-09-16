import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/errors";

export async function characterValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name } = req.body;

  if (name) return next();
  else throw new CustomError("Character must have name", 401);
}
