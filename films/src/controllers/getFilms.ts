import { Request, Response } from "express";
import data from "../data";
import { sendResponse } from "../utils/response";

export async function getFilms(req: Request, res: Response) {
  const films: any[] = await data.listFilms(); // When use database, change the :any[] for :`Model_Name`[]

  sendResponse<any[]>(res, 200, films, "Films Data");
}
