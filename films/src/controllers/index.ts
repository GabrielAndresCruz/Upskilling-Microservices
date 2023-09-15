import { wrongRoute } from "./wrongRoute";
import { getFilms } from "./getCharacters";
import { createFilm } from "./createCharacters";
import catchedAsync from "../utils/catchedAsync";

const controllers = {
  wrongRoute: catchedAsync(wrongRoute),
  getFilms: catchedAsync(getFilms),
  createFilm: catchedAsync(createFilm),
};

export default controllers;
