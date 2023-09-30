import express from "express";
import controllers from "../controllers";
import catchedAsync from "../utils/catchedAsync";
import middlewares from "../middlewares";

const router = express.Router();

router.get("/", controllers.getCharacters);

router.get("/:id", controllers.getOneCharacter);

router.post("/", middlewares.characterValidation, controllers.createCharacter);

export default router;
