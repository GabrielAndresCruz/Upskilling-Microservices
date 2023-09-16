import catchedAsync from "../utils/catchedAsync";
import { planetValidation } from "./planetValidation";

const planetValidator = {
  planetValidation: catchedAsync(planetValidation),
};

export default planetValidator;
