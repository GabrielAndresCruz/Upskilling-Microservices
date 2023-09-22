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
  async list(): Promise<IPlanet[]> {
    return await this.find().populate("films", ["_id", "title"]);
  },
  async get(id: Number): Promise<IPlanet | null> {
    const characterId = id.toString();
    return await this.findById(characterId).populate("films", ["_id", "title"]);
  },
  async create(planet: IPlanet): Promise<IPlanet> {
    return await this.create(planet);
  },
};

export type IPlanet = InferSchemaType<typeof planetSchema>;

export interface PlanetStatics extends Model<IPlanet> {
  // Problem with the :Promise<> of the functions
  list(): any;
  get(id: Number): any;
  create(planet: IPlanet): any;
}
