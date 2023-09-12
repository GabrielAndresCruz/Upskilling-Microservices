import { Request, Response } from "express";

export function createCharacter(req: Request, res: Response) {
  try {
    res.status(201).send("Character created");
  } catch (error) {
    res.status(400).send(error);
  }
}
