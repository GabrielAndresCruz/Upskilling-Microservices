import express from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";

const router = express.Router();

router.get("/characters/", controllers.getCharacters);

router.get("/characters/:id", controllers.getOneCharacter);

router.post(
  "/characters/",
  middlewares.characterValidation,
  controllers.createCharacter
);

router.put("/characters/:id", controllers.updateCharacter);

router.delete("/characters/:id", controllers.deleteCharacter);

export default router;
