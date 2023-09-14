import express, { Express } from "express";
import {
  createProxyMiddleware,
  Filter,
  Options,
  RequestHandler,
} from "http-proxy-middleware";

const app: Express = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true,
  })
);

app.listen(8000, () => {
  console.log("Gateway on port 8000");
});
