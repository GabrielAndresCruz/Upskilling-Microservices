import { Request, Response } from "express";
import data from "../data";
import { sendResponse } from "../utils/response";

export async function deletePlanet(req: Request, res: Response) {
  const { id } = req.params;

  const planet: any = await data.deletePlanet(id); // When use database, change the :any[] for :`Model_Name`[]

  sendResponse<any[]>(
    res,
    200,
    planet,
    `Remove ${planet.data.name} from Planets`
  );
}
