import { wrongRoute } from "./wrongRoute";
import { getFilms } from "./getFilms";
import { createFilm } from "./createFilms";
import catchedAsync from "../utils/catchedAsync";

const controllers = {
  wrongRoute: catchedAsync(wrongRoute),
  getFilms: catchedAsync(getFilms),
  createFilm: catchedAsync(createFilm),
};

export default controllers;
