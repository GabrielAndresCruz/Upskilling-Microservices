import mongoose, {
  InferSchemaType,
  Model,
  Schema,
  Types,
  model,
} from "mongoose";

export const filmSchema: Schema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  opening_crawl: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  producer: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
  characters: [
    {
      type: String,
      required: true,
      ref: "Character",
    },
  ],
  planets: [
    {
      type: String,
      required: true,
      ref: "Planet",
    },
  ],
});

filmSchema.statics = {
  async list(): Promise<Film[]> {
    return await this.find()
      .populate("characters", ["_id", "name"])
      .populate("planets", ["_id", "name"]);
  },
  async get(id: Number): Promise<Film | null> {
    const characterId = id.toString();
    return await this.findById(characterId)
      .populate("characters", ["_id", "name"])
      .populate("planets", ["_id", "name"]);
  },
  async create(film: Film): Promise<Film> {
    return await this.create(film);
  },
};

export type Film = InferSchemaType<typeof filmSchema>;

export interface FilmsStatics extends Model<Film> {
  // Problem with the :Promise<> of the functions
  list(): any;
  get(id: Number): any;
  create(film: Film): any;
}
