import express, { Express } from "express";
import morgan from "morgan";
import router from "./routes";
import controllers from "./controllers";

const app: Express = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", router);

app.use("*", controllers.wrongRoute);

export default app;
