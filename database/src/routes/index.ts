import express, { Request, Response } from "express";
import models from "../database/index";
import validateModel from "../middlewares/validateModel";

const router = express.Router();

router.get("/:model", validateModel, async (req: Request, res: Response) => {
  try {
    const { model } = req.params;
    const modelName = model.charAt(0).toUpperCase() + model.slice(1);
    const response = await models[modelName].list();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

router.get(
  "/:model/:id",
  validateModel,
  async (req: Request, res: Response) => {
    try {
      const { model, id } = req.params;
      const modelName = model.charAt(0).toUpperCase() + model.slice(1);
      const response = await models[modelName].get(id);
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }
);

router.post("/:model", validateModel, async (req: Request, res: Response) => {
  try {
    const { model } = req.params;
    const body = req.body;
    console.error(body);
    console.error("im here");
    const modelName = model.charAt(0).toUpperCase() + model.slice(1);
    const response = await models[modelName].create(body);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

export default router;
