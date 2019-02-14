import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import { Routes } from "./routes";

class App {
  public app: express.Application;
  public mongoUrl: string =
    "mongodb://amir:LVqKT3eHGXj2s2r@ds135255.mlab.com:35255/tribe";
  public routesPrv: Routes = new Routes();
  constructor() {
    this.app = express();
    this.config();
    this.routesPrv.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }
}

export default new App().app;
