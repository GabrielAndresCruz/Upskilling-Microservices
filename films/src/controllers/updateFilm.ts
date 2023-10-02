import { Request, Response } from "express";
import data from "../data";
import { sendResponse } from "../utils/response";

export async function updateFilm(req: Request, res: Response) {
  const { id } = req.params;
  const body = req.body;

  const film: any = await data.updateFilm(id, body); // When use database, change the :any[] for :`Model_Name`[]

  sendResponse<any[]>(res, 200, film, `${film.data.title} was updated`);
}
