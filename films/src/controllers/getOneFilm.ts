import { Request, Response } from "express";
import { sendResponse } from "../utils/response";
import data from "../data";

export async function getOneFilm(req: Request, res: Response) {
  const { id } = req.params;

  const films: any[] = await data.listOneFilm(id); // When use database, change the :any[] for :`Model_Name`[]

  sendResponse<any[]>(res, 200, films, "Films Data");
}
