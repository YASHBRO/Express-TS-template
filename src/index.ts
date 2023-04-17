import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import RequestLogger from "./middleware/RequestLogger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(RequestLogger);

app.get("/", (_req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
  next();
  return;
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
