import express, { Express } from "express";
import morgan from "morgan";
import router from "./routes";

const app: Express = express();

const PORT = 8004;

app.use(morgan("dev"));
app.use(express.json());

app.use(router);

export default app;
