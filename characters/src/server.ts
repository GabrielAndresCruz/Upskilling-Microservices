import express, { Express, Response } from "express";
import morgan from "morgan";
import router from "./routes/index";
import controllers from "./controllers";

const server: Express = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(router);

server.use("*", controllers.wrongRoute);

export default server;
