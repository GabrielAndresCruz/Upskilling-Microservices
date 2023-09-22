import express, { Request, Response } from "express";
import models from "../database/index";

const router = express.Router();

router.get("/:model", async (req: Request, res: Response) => {
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

export default router;
