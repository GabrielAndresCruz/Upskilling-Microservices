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
    required: [true, "Please, enter a ID"],
  },
  title: {
    type: String,
    required: true,
  },
  opening_crawl: {
    type: String,
    required: false,
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
      required: false,
      ref: "Character",
    },
  ],
  planets: [
    {
      type: String,
      required: false,
      ref: "Planet",
    },
  ],
});

filmSchema.statics = {
  async list(): Promise<IFilm[]> {
    return await this.find()
      .populate("characters", ["_id", "name"])
      .populate("planets", ["_id", "name"]);
  },
  async get(id: Number): Promise<IFilm | null> {
    const filmId = id.toString();
    return await this.findById(filmId)
      .populate("characters", ["_id", "name"])
      .populate("planets", ["_id", "name"]);
  },
  async insert(film: IFilm): Promise<IFilm> {
    return await this.create(film);
  },
  async delete(id: Number): Promise<IFilm> {
    return await this.findByIdAndDelete(id);
  },
  async update(id: Number, film: IFilm): Promise<IFilm> {
    return await this.findByIdAndUpdate(id, film);
  },
};

export type IFilm = InferSchemaType<typeof filmSchema>;

export interface FilmsStatics extends Model<IFilm> {
  // Problem with the :Promise<> of the functions
  list(): any;
  get(id: Number): any;
  insert(film: IFilm): any;
  delete(film: IFilm): any;
  update(film: IFilm): any;
}
