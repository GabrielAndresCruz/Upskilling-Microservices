import { Request, Response } from "express";
import data from "../data";
import { sendResponse } from "../utils/response";

export async function getOneCharacter(req: Request, res: Response) {
  const { id } = req.params;

  const characters: any = await data.listOneCharacter(id); // When use database, change the :any[] for :`Model_Name`[]

  sendResponse<any[]>(res, 200, characters, `${characters.data.name} data`);
}
