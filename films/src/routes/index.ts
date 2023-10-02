import express from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";

const router = express.Router();

router.get("/films/", controllers.getFilms);

router.get("/films/:id", controllers.getOneFilm);

router.post("/films/", middlewares.filmValidation, controllers.createFilm);

router.put("/films/:id", controllers.updateFilm);

router.delete("/films/:id", controllers.deleteFilm);

export default router;
