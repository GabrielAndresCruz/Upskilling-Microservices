import { Request, Response } from "express";

export async function createPlanets(req: Request, res: Response) {
  res.status(201).send("Planet created");
}
