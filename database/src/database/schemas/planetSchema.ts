import mongoose, {
  InferSchemaType,
  Model,
  Schema,
  Types,
  model,
} from "mongoose";

export const planetSchema: Schema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rotation_period: {
    type: String,
    required: true,
  },
  orbital_period: {
    type: String,
    required: true,
  },
  diameter: {
    type: String,
    required: true,
  },
  climate: {
    type: String,
    required: true,
  },
  gravity: {
    type: String,
    required: true,
  },
  terrain: {
    type: String,
    required: true,
  },
  surface_water: {
    type: String,
    required: true,
  },
  residents: [
    {
      type: String,
      required: true,
    },
  ],
  films: [
    {
      type: String,
      required: true,
      ref: "Film",
    },
  ],
});

planetSchema.statics = {
  async list(): Promise<Planet[]> {
    return await this.find().populate("films", ["_id", "title"]);
  },
  async get(id: Number): Promise<Planet | null> {
    const characterId = id.toString();
    return await this.findById(characterId).populate("films", ["_id", "title"]);
  },
  async create(planet: Planet): Promise<Planet> {
    return await this.create(planet);
  },
};

export type Planet = InferSchemaType<typeof planetSchema>;

export interface PlanetStatics extends Model<Planet> {
  // Problem with the :Promise<> of the functions
  list(): any;
  get(id: Number): any;
  create(planet: Planet): any;
}
