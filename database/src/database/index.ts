import mongoose from "mongoose";
import {
  ICharacter,
  CharactersStatics,
  charactersSchema,
} from "./schemas/characterSchema";
import { IPlanet, PlanetStatics, planetSchema } from "./schemas/planetSchema";
import { IFilm, FilmsStatics, filmSchema } from "./schemas/filmSchema";

// const Character = mongoose.model<ICharacter, CharactersStatics>(
//   "Character",
//   charactersSchema
// );

// const PlanetModel = mongoose.model<Planet, PlanetStatics>(
//   "Planet",
//   planetSchema
// );

// const FilmModel = mongoose.model<Film, FilmsStatics>("Film", filmSchema);

const models = {
  Character: mongoose.model<ICharacter, CharactersStatics>(
    "Character",
    charactersSchema
  ),
  Planet: mongoose.model<IPlanet, PlanetStatics>("Planet", planetSchema),
  Film: mongoose.model<IFilm, FilmsStatics>("Film", filmSchema),
};

export default models;
