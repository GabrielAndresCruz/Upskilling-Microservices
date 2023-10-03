import { Request, Response } from "express";
import data from "../data";
import { sendResponse } from "../utils/response";

export async function updatePlanet(req: Request, res: Response) {
  const { id } = req.params;
  const body = req.body;

  const planet: any = await data.updatePlanet(id, body); // When use database, change the :any[] for :`Model_Name`[]

  sendResponse<any[]>(res, 200, planet, `${planet.data.name} was updated`);
}
