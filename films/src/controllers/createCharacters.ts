import { Request, Response } from "express";

export async function createFilm(req: Request, res: Response) {
  res.status(201).send("Film created");
}
