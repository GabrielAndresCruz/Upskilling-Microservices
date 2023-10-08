import { InferSchemaType, Model, Schema } from "mongoose";

export const charactersSchema: Schema = new Schema({
  _id: {
    type: String,
    required: [true, "Please enter a ID."],
  },
  name: {
    type: String,
    required: [true, "Please enter a name."],
  },
  height: {
    type: String,
    required: [true, "Please enter a height."],
  },
  mass: {
    type: String,
    required: [true, "Please enter a mass."],
  },
  hair_color: {
    type: String,
    required: [true, "Please enter a hair color."],
  },
  skin_color: {
    type: String,
    required: [true, "Please enter a skin color."],
  },
  eye_color: {
    type: String,
    required: [true, "Please enter an eye color."],
  },
  birth_year: {
    type: String,
    required: [true, "Please enter a birth year."],
  },
  gender: {
    type: String,
    enum: ["male", "female", "hermaphrodite", "none", "n/a"],
    required: [true, "Please select a gender."],
  },
  homeworld: {
    type: String,
    required: false,
    ref: "Planet",
  },
  films: [
    {
      type: String,
      required: false,
      ref: "Film",
    },
  ],
});

charactersSchema.statics = {
  async list(): Promise<ICharacter[]> {
    return await this.find()
      .populate("homeworld", ["_id", "name"])
      .populate("films", ["_id", "title"]);
  },
  async get(id: Number): Promise<ICharacter | null> {
    const characterId = id.toString();
    return await this.findById(characterId)
      .populate("homeworld", ["_id", "name"])
      .populate("films", ["_id", "title"]);
  },
  async insert(character: ICharacter): Promise<ICharacter> {
    return await this.create(character);
  },
  async delete(id: Number): Promise<ICharacter> {
    return await this.findByIdAndDelete(id);
  },
  async update(id: Number, character: ICharacter): Promise<ICharacter> {
    return await this.findByIdAndUpdate(id, character);
  },
};

export type ICharacter = InferSchemaType<typeof charactersSchema>;

export interface CharactersStatics extends Model<ICharacter> {
  // Problem with the :Promise<> of the functions
  list(): any;
  get(id: Number): any;
  insert(character: ICharacter): any;
  delete(character: ICharacter): any;
  update(character: ICharacter): any;
}
