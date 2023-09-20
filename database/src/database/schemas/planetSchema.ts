import mongoose, { InferSchemaType, Schema, Types, model } from "mongoose";

export const planetSchema: Schema = new Schema({
  _id: {
    type: Types.ObjectId,
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

export type Planet = InferSchemaType<typeof planetSchema>;
