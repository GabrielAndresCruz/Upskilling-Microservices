import express, { Express } from "express";
import morgan from "morgan";

const app: Express = express();

const PORT = 8004;

app.use(morgan("dev"));
app.use(express.json());

export default app;
