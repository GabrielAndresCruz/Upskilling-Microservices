import { wrongRoute } from "./wrongRoute";
import { getCharacters } from "./getCharacters";
import { createCharacter } from "./createCharacters";
import catchedAsync from "../utils/catchedAsync";

const controllers = {
  wrongRoute: catchedAsync(wrongRoute),
  getCharacters: catchedAsync(getCharacters),
  createCharacter: catchedAsync(createCharacter),
};

export default controllers;
