import { wrongRoute } from "./wrongRoute";
import { getCharacters } from "./getCharacters";
import { createCharacter } from "./createCharacters";
import { getOneCharacter } from "./getOneCharacter";
import catchedAsync from "../utils/catchedAsync";
import { deleteCharacter } from "./deleteCharacter";
import { updateCharacter } from "./updateCharacter";

const controllers = {
  wrongRoute: catchedAsync(wrongRoute),
  getCharacters: catchedAsync(getCharacters),
  getOneCharacter: catchedAsync(getOneCharacter),
  createCharacter: catchedAsync(createCharacter),
  updateCharacter: catchedAsync(updateCharacter),
  deleteCharacter: catchedAsync(deleteCharacter),
};

export default controllers;
