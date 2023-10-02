import { wrongRoute } from "./wrongRoute";
import { getFilms } from "./getFilms";
import { createFilm } from "./createFilms";
import catchedAsync from "../utils/catchedAsync";
import { getOneFilm } from "./getOneFilm";
import { updateFilm } from "./updateFilm";
import { deleteFilm } from "./deleteFilm";

export default {
  wrongRoute: catchedAsync(wrongRoute),
  getFilms: catchedAsync(getFilms),
  getOneFilm: catchedAsync(getOneFilm),
  createFilm: catchedAsync(createFilm),
  updateFilm: catchedAsync(updateFilm),
  deleteFilm: catchedAsync(deleteFilm),
};
