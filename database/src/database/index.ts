import mongoose from "mongoose";
import {
  Character,
  CharactersStatics,
  charactersSchema,
} from "./schemas/characterSchema";
import { Planet, planetSchema } from "./schemas/planetSchema";
import { Film, FilmsStatics, filmSchema } from "./schemas/filmSchema";

export const CharacterModel = mongoose.model<Character, CharactersStatics>(
  "Character",
  charactersSchema
);

export const PlanetModel = mongoose.model<Planet>("Planet", planetSchema);

export const FilmModel = mongoose.model<Film, FilmsStatics>("Film", filmSchema);
