import express, { Express, Response } from "express";
import morgan from "morgan";
import router from "./routes/index";

const server: Express = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(router);

server.use("*", (res: Response) => {
  res.status(404).send({
    success: false,
    message: "Invalid route",
  });
});

export default server;
