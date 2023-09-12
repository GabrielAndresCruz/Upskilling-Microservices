import { Request, Response } from "express";

export function getCharacters(req: Request, res: Response) {
  try {
    res.status(200).send("characters");
  } catch (error) {
    res.status(400).send(error);
  }
}
