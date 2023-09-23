import app from "./src/server";
import mongoose from "mongoose";
import config from "./config/config";
import models from "./src/database";

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

// models.Character.insert({
//   _id: "300",
//   name: "Gabriel",
//   height: "178",
//   mass: "65",
//   hair_color: "light brown",
//   skin_color: "porcelain",
//   eye_color: "brown",
//   birth_year: "unknow",
//   gender: "male",
// }).then((res) => console.log(res));

// models.Character.get(301).then((res) => console.log(res));
