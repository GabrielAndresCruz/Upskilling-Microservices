import { Request, Response } from "express";
import { listCharacters } from "../data";

export async function getCharacters(req: Request, res: Response) {
  try {
    const characters = await listCharacters();
    res.status(200).send(characters);
  } catch (error) {
    res.status(400).send(error);
  }
}
