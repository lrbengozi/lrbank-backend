import express from "express";
import "./database";

import RouteV1 from "./routes/v1";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(RouteV1);
  }
}

export default new App().app;
