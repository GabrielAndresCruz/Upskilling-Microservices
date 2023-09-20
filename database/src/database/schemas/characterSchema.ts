import { InferSchemaType, Schema, Types, model } from "mongoose";

const charactersSchema = new Schema({
  _id: {
    type: Types.ObjectId,
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

export type Character = InferSchemaType<typeof charactersSchema>;

export default model<Character>("Character", charactersSchema);
