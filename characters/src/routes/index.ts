import express from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";

const router = express.Router();

router.get("/", controllers.getCharacters);

router.get("/:id", controllers.getOneCharacter);

router.post("/", middlewares.characterValidation, controllers.createCharacter);

router.put("/:id", controllers.updateCharacter);

router.delete("/:id", controllers.deleteCharacter);

export default router;
