import catchedAsync from "../utils/catchedAsync";
import createModel from "./createModel";
import getModelById from "./getModelById";
import getModels from "./getModels";

export default {
  getModels: catchedAsync(getModels),
  getModelById: catchedAsync(getModelById),
  createModel: catchedAsync(createModel),
};
