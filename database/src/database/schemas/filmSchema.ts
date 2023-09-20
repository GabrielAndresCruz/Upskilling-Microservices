import mongoose, { InferSchemaType, Schema, Types, model } from "mongoose";

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

export type Film = InferSchemaType<typeof filmSchema>;
