import { Request, Response } from "express";

const catchedAsync = (fn: (req: Request, res: Response) => Promise<any>) => {
  return (req: Request, res: Response) => {
    fn(req, res).catch((err) => {
      res.status(500).send({
        success: false,
        message: "Internal Server Error",
        error: err.message,
      });
    });
  };
};

export default catchedAsync;
