import express from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";

const router = express.Router();

router.get("/planets/", controllers.getPlanets);

router.post(
  "/planets/",
  middlewares.planetValidation,
  controllers.createPlanets
);

export default router;
