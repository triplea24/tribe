import * as mongoose from "mongoose";
import { ContentSchema } from "../models";
import { Request, Response } from "express";

const Content = mongoose.model("Contact", ContentSchema);

export class Controller {
  public getCounter: number;
  public postCounter: number;
  constructor() {
    this.getCounter = 0;
    this.postCounter = 0;
  }
  public addNewContent = (req: Request, res: Response) => {
    // TODO: Validation error with 400 for title and type
    this.postCounter++;
    let delayTime = 1;
    let delay = false;
    if (this.postCounter % 9 === 0) {
      return res.status(500).send(new Error());
    }
    if (this.postCounter % 5 === 0) {
      delayTime = 5000 + Math.floor(Math.random() * Math.floor(5000));
      delay = true;
    }
    setTimeout(() => {
      const newContent = new Content(req.body);
      newContent.save((err, content) => {
        if (err) {
          return res.send(err);
        }
        res.json(content);
      });
    }, delayTime);
  };
  public getAllContents = (req: Request, res: Response) => {
    this.getCounter++;
    let delayTime = 1;
    let delay = false;
    if (this.getCounter % 5 === 0) {
      delayTime = 5500;
      delay = true;
    }
    setTimeout(() => {
      Content.find({}, (err, contents) => {
        if (err) {
          return res.send(err);
        }
        res.json(contents);
      });
    }, delayTime);
  };
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
