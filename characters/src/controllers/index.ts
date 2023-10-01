import { wrongRoute } from "./wrongRoute";
import { getCharacters } from "./getCharacters";
import { createCharacter } from "./createCharacters";
import { getOneCharacter } from "./getOneCharacter";
import catchedAsync from "../utils/catchedAsync";
import { deleteCharacter } from "./deleteCharacter";

const controllers = {
  wrongRoute: catchedAsync(wrongRoute),
  getCharacters: catchedAsync(getCharacters),
  createCharacter: catchedAsync(createCharacter),
  getOneCharacter: catchedAsync(getOneCharacter),
  deleteCharacter: catchedAsync(deleteCharacter),
};

export default controllers;
