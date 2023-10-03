import { wrongRoute } from "./wrongRoute";
import { getPlanets } from "./getPlanets";
import { createPlanets } from "./createPlanets";
import catchedAsync from "../utils/catchedAsync";
import { getOnePlanet } from "./getOnePlanet";
import { updatePlanet } from "./updatePlanet";
import { deletePlanet } from "./deletePlanet";

const controllers = {
  wrongRoute: catchedAsync(wrongRoute),
  getPlanets: catchedAsync(getPlanets),
  getOnePlanet: catchedAsync(getOnePlanet),
  createPlanets: catchedAsync(createPlanets),
  updatePlanet: catchedAsync(updatePlanet),
  deletePlanet: catchedAsync(deletePlanet),
};

export default controllers;
