import { Request, Response } from "express";
import { listCharacters } from "../data";
import { sendResponse } from "../utils/response";

export async function getCharacters(req: Request, res: Response) {
  //throw new Error("Error al obtener los personajes");

  const characters: any[] = await listCharacters(); // When use database, change the :any[] for :`Model_Name`[]

  sendResponse<any[]>(res, 200, characters, "Characters Data");
}
