import { Request, Response } from "express";

export async function wrongRoute(req: Request, res: Response) {
  res.status(404).send({
    success: false,
    message: "Invalid route",
  });
}
