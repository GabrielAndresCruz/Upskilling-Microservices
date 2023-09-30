import express from "express";
import validateModel from "../middlewares/validateModel";
import controllers from "../controllers/index";

const router = express.Router();

router.get("/:model", validateModel, controllers.getModels);

router.get("/:model/:id", validateModel, controllers.getModelById);

router.post("/:model", validateModel, controllers.createModel);

export default router;
