import express from "express";
import controllers from "../controllers";
import catchedAsync from "../utils/catchedAsync";

const router = express.Router();

router.get("/", catchedAsync(controllers.getCharacters));

router.post("/", catchedAsync(controllers.createCharacter));

export default router;
