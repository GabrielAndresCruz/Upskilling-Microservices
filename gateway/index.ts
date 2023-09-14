import express, { Express } from "express";
import morgan from "morgan";
import {
  createProxyMiddleware,
  Filter,
  Options,
  RequestHandler,
} from "http-proxy-middleware";

const PORT = 8000;

const app: Express = express();

app.use(morgan("dev"));

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,
  })
);

app.listen(PORT, () => {
  console.log(`Gateway on port ${8000}`);
});
