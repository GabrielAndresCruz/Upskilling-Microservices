import mongoose, {
  InferSchemaType,
  Model,
  Schema,
  Types,
  model,
} from "mongoose";

export const charactersSchema: Schema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  mass: {
    type: String,
    required: true,
  },
  hair_color: {
    type: String,
    required: true,
  },
  skin_color: {
    type: String,
    required: true,
  },
  eye_color: {
    type: String,
    required: true,
  },
  birth_year: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "hermaphrodite", "none", "n/a"],
    required: true,
  },
  homeworld: {
    type: String,
    required: true,
    ref: "Planet",
  },
  films: [
    {
      type: String,
      required: true,
      ref: "Film",
    },
  ],
});

charactersSchema.statics = {
  async list(): Promise<Character[]> {
    return await this.find()
      .populate("homeworld", ["_id", "name"])
      .populate("films", ["_id", "title"]);
  },
  async get(id: Number): Promise<Character | null> {
    const characterId = id.toString();
    return await this.findById(characterId)
      .populate("homeworld", ["_id", "name"])
      .populate("films", ["_id", "title"]);
  },
  async create(character: Character): Promise<Character> {
    return await this.create(character);
  },
};

export type Character = InferSchemaType<typeof charactersSchema>;

export interface CharactersStatics extends Model<Character> {
  // Problem with the :Promise<> of the functions
  list(): any;
  get(id: Number): any;
  create(character: Character): any;
}
