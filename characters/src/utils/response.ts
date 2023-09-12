import { Response } from "express";

export function sendResponse<T>(
  res: Response,
  statusCode: number,
  data: T,
  message: string
) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}
