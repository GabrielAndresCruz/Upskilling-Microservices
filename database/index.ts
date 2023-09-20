import app from "./src/server";
import mongoose from "mongoose";
import config from "./config/config";
import CharacterModel from "./src/database/schemas/characterSchema";

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
  .catch(() => {
    console.error("Error connecting to MongoDB");
  });

CharacterModel.find().then((res) => console.log(res[0]));
