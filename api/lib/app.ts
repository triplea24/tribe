import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as cors from "cors";

import { Routes } from "./routes";

class App {
  public app: express.Application;
  public mongoUrl: string =
    process.env.MONGODB_TEST_URL || process.env.MONGODB_URL;
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
    this.app.use(cors());
  }
  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }
}
export { App };
export default new App().app;
