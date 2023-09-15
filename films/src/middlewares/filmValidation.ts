import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/errors";

export async function filmValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name } = req.body;

  if (name) return next();
  else throw new CustomError("Film must have name", 401);
}
