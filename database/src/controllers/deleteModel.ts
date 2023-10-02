import { Request, Response } from "express";
import models from "../database";
import { sendResponse } from "../utils/response";

export default async (req: Request, res: Response) => {
  const { model, id } = req.params;
  const modelName = model.charAt(0).toUpperCase() + model.slice(1);
  const response = await models[modelName].delete(id);
  sendResponse<any[]>(
    res,
    200,
    response,
    `${response.name ? response.name : response.title} was deleted succesfully`
  );
};
