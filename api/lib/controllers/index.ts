import * as mongoose from "mongoose";
import { ContentSchema } from "../models";
import { Request, Response } from "express";

const Content = mongoose.model("Contact", ContentSchema);

export class Controller {
  public addNewContent(req: Request, res: Response) {
    // TODO: Don't forget the delay and 404 rules
    const newContent = new Content(req.body);
    newContent.save((err, content) => {
      if (err) {
        return res.send(err);
      }
      res.json(content);
    });
  }
  public getAllContents(req: Request, res: Response) {
    // TODO: Don't forget the delay rule
    Content.find({}, (err, contents) => {
      if (err) {
        return res.send(err);
      }
      res.json(contents);
    });
  }
  public deleteContent(req: Request, res: Response) {
    Content.remove({ _id: req.params.id }, (err, content) => {
      if (err) {
        return res.send(err);
      }
      res.json({
        error: false
      });
    });
  }
}
