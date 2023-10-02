import express from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";

const router = express.Router();

router.get("/", controllers.getFilms);

router.get("/:id", controllers.getOneFilm);

router.post("/", middlewares.filmValidation, controllers.createFilm);

router.put("/:id", controllers.updateFilm);

router.delete("/:id", controllers.deleteFilm);

export default router;
