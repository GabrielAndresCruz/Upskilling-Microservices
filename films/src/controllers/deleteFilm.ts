import { Request, Response } from "express";
import data from "../data";
import { sendResponse } from "../utils/response";

export async function deleteFilm(req: Request, res: Response) {
  const { id } = req.params;

  const film: any = await data.deleteFilm(id); // When use database, change the :any[] for :`Model_Name`[]

  sendResponse<any[]>(res, 200, film, `Remove ${film.data.name} from Films`);
}
