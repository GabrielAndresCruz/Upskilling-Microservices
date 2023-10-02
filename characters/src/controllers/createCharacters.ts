import { Request, Response } from "express";
import data from "../data";
import { sendResponse } from "../utils/response";

export async function createCharacter(req: Request, res: Response) {
  const body = req.body;

  const characters: any = await data.createCharacter(body); // When use database, change the :any[] for :`Model_Name`[]

  sendResponse<any[]>(
    res,
    200,
    characters,
    `${characters.data.name} was created`
  );
}
