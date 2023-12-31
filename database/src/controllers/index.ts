import catchedAsync from "../utils/catchedAsync";
import createModel from "./createModel";
import deleteModel from "./deleteModel";
import getModelById from "./getModelById";
import getModels from "./getModels";
import updateModel from "./updateModel";
import { wrongRoute } from "./wrongRoute";

export default {
  getModels: catchedAsync(getModels),
  getModelById: catchedAsync(getModelById),
  createModel: catchedAsync(createModel),
  updateModel: catchedAsync(updateModel),
  deleteModel: catchedAsync(deleteModel),
  wrongRoute: catchedAsync(wrongRoute),
};
