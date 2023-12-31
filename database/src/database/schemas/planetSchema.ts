import { InferSchemaType, Model, Schema } from "mongoose";

export const planetSchema: Schema = new Schema({
  _id: {
    type: String,
    required: [true, "Please, enter a ID"],
  },
  name: {
    type: String,
    required: [true, "Please, enter a name"],
  },
  rotation_period: {
    type: String,
    required: false,
  },
  orbital_period: {
    type: String,
    required: false,
  },
  diameter: {
    type: String,
    required: false,
  },
  climate: {
    type: String,
    required: false,
  },
  gravity: {
    type: String,
    required: false,
  },
  terrain: {
    type: String,
    required: false,
  },
  surface_water: {
    type: String,
    required: false,
  },
  residents: [
    {
      type: String,
      required: false,
    },
  ],
  films: [
    {
      type: String,
      required: false,
      ref: "Film",
    },
  ],
});

planetSchema.statics = {
  async list(): Promise<IPlanet[]> {
    return await this.find().populate("films", ["_id", "title"]);
  },
  async get(id: Number): Promise<IPlanet | null> {
    const planetId = id.toString();
    return await this.findById(planetId).populate("films", ["_id", "title"]);
  },
  async insert(planet: IPlanet): Promise<IPlanet> {
    return await this.create(planet);
  },
  async delete(id: Number): Promise<IPlanet> {
    return await this.findByIdAndDelete(id);
  },
  async update(id: Number, planet: IPlanet): Promise<IPlanet> {
    return await this.findByIdAndUpdate(id, planet);
  },
};

export type IPlanet = InferSchemaType<typeof planetSchema>;

export interface PlanetStatics extends Model<IPlanet> {
  // Problem with the :Promise<> of the functions
  list(): IPlanet;
  get(id: Number): IPlanet;
  insert(planet: IPlanet): IPlanet;
  delete(planet: IPlanet): IPlanet;
  update(planet: IPlanet): IPlanet;
}
