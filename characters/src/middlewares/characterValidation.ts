import { NextFunction, Request, Response } from "express";

export async function characterValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name } = req.body;

  if (name) return next();
  else throw Error("Character must be have name");
}
