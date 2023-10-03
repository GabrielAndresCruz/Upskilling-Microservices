import express from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";

const router = express.Router();

router.get("/planets/", controllers.getPlanets);

router.get("/planets/:id", controllers.getOnePlanet);

router.post(
  "/planets/",
  middlewares.planetValidation,
  controllers.createPlanets
);

router.put("/planets/:id", controllers.updatePlanet);

router.delete("/planets/:id", controllers.deletePlanet);

export default router;
