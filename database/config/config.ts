import * as dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DATABASE = process.env.MONGO_DATABASE;

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@atlasmicroservice.ylcihtu.mongodb.net/${MONGO_DATABASE}`;

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 8004;

const config = {
  mongo: {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};

export default config;
