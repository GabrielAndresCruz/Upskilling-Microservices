import { Request, Response } from "express";
import { sendResponse } from "../utils/response";

export async function wrongRoute(req: Request, res: Response) {
  res.status(404).send({
    success: false,
    message: "Invalid route",
  });
}
