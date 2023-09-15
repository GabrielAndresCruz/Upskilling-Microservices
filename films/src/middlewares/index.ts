import catchedAsync from "../../utils/catchedAsync";
import { characterValidation } from "./characterValidation";

const characterValidator = {
  characterValidation: catchedAsync(characterValidation),
};

export default characterValidator;
