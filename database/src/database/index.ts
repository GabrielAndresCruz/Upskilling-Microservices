import mongoose from "mongoose";
import { Character, charactersSchema } from "./schemas/characterSchema";
import { Planet, planetSchema } from "./schemas/planetSchema";
import { Film, filmSchema } from "./schemas/filmSchema";

export const CharacterModel = mongoose.model<Character>(
  "Character",
  charactersSchema
);

export const PlanetModel = mongoose.model<Planet>("Planet", planetSchema);

export const FilmModel = mongoose.model<Film>("Film", filmSchema);
