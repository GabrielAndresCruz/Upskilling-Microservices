import app from "./src/server";
import mongoose from "mongoose";
import config from "./config/config";
import { CharacterModel } from "./src/database";

const PORT = config.server.port;

/** Connect to Mongo */
mongoose
  .connect(config.mongo.url)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", console.error(err));
  });

CharacterModel.find()
  .populate("homeworld")
  // .populate("films")
  .then((res) => console.log(res[0]));

// PlanetModel.find()
//   // .populate("homeworld")
//   // .populate("films")
//   .then((res) => console.log(res[0]));

// FilmModel.find().then((res) => console.log(res[0]));
