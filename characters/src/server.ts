import express, { Express } from "express";
import morgan from "morgan";
import router from "./routes/index";

const server: Express = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(router);

export default server;
