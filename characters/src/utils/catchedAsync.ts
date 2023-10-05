import { NextFunction, Request, Response } from "express";

const catchedAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => {
      res.status(500).send({
        success: false,
        message: "Internal Server Error",
        error: err.response.data.error,
        // error: err.message,
      });
    });
  };
};

export default catchedAsync;
