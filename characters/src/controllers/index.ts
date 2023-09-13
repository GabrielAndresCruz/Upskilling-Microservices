import { getCharacters } from "./getCharacters";
import { createCharacter } from "./createCharacters";
import catchedAsync from "../utils/catchedAsync";

const controllers = {
  getCharacters: catchedAsync(getCharacters),
  createCharacter: catchedAsync(createCharacter),
};

export default controllers;
