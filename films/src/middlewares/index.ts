import catchedAsync from "../utils/catchedAsync";
import { filmValidation } from "./filmValidation";

const filmValidator = {
  filmValidation: catchedAsync(filmValidation),
};

export default filmValidator;
