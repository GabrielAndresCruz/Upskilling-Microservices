import { Request, Response } from "express";
import models from "../database";
import { sendResponse } from "../utils/response";

export default async (req: Request, res: Response) => {
  const { model, id } = req.params;
  const body = req.body;
  const modelName = model.charAt(0).toUpperCase() + model.slice(1);
  await models[modelName].update(id, body);
  const data = await models[modelName].get(id);
  sendResponse<any[]>(
    res,
    200,
    data,
    `${
      body.name
        ? body.name
        : body.title
        ? body.title
        : data.name
        ? data.name
        : data.title
    } was updated succesfully`
  );
};

//? body.title : response.data.name

//{
//   "birth_year": "18101999"
//}
