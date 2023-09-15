import express from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";

const router = express.Router();

router.get("/", controllers.getFilms);

router.post("/", middlewares.filmValidation, controllers.createFilm);

export default router;
