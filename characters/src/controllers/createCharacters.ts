import { Request, Response } from "express";

export async function createCharacter(req: Request, res: Response) {
  res.status(201).send("Character created");
}
