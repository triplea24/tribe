import { Request, Response } from "express";

import { Controller } from "../controllers";

// /api/v1/posts -> POST & GET
//  /api/v1/posts/:id -> DELETE
export class Routes {
  public controller: Controller = new Controller();
  public routes(app): void {
    app
      .route("/api/v1/posts/")
      .post(this.controller.addNewContent)
      .get(this.controller.getAllContents);
  }
}
