import { Request, Response } from "express";
import data from "../data";
import { sendResponse } from "../utils/response";

export async function getOnePlanet(req: Request, res: Response) {
  const { id } = req.params;

  const planet: any = await data.listOnePlanet(id); // When use database, change the :any[] for :`Model_Name`[]

  sendResponse<any[]>(res, 200, planet, `${planet.data.name} data`);
}
