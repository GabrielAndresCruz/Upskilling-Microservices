import { Request, Response } from "express";
import data from "../data";
import { sendResponse } from "../utils/response";

export async function getPlanets(req: Request, res: Response) {
  const planets: any[] = await data.listPlanets(); // When use database, change the :any[] for :`Model_Name`[]

  sendResponse<any[]>(res, 200, planets, "Planets Data");
}
