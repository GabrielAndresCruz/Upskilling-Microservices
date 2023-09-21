import app from "./src/server";
import mongoose from "mongoose";
import config from "./config/config";
import { CharacterModel, FilmModel, PlanetModel } from "./src/database";

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

// CharacterModel.list().then((res) => console.log(res[0]));
// CharacterModel.get(6).then((res) => console.log(res));

// PlanetModel.list().then((res) => console.log(res[0]));
// PlanetModel.get().then((res) => console.log(res));

FilmModel.list().then((res) => console.log(res[0]));
// FilmModel.get().then((res) => console.log(res));
