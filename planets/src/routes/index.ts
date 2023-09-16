import express from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";

const router = express.Router();

router.get("/", controllers.getPlanets);

router.post("/", middlewares.planetValidation, controllers.createPlanets);

export default router;
