import { wrongRoute } from "./wrongRoute";
import { getPlanets } from "./getPlanets";
import { createPlanets } from "./createPlanets";
import catchedAsync from "../utils/catchedAsync";

const controllers = {
  wrongRoute: catchedAsync(wrongRoute),
  getPlanets: catchedAsync(getPlanets),
  createPlanets: catchedAsync(createPlanets),
};

export default controllers;
