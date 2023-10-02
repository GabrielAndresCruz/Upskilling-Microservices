import { Request, Response } from "express";
import data from "../data";
import { sendResponse } from "../utils/response";

export async function createFilm(req: Request, res: Response) {
  const body = req.body;

  const film: any = await data.createFilm(body); // When use database, change the :any[] for :`Model_Name`[]

  sendResponse<any[]>(res, 200, film, `${film.data.name} was created`);
}
