import * as mongoose from "mongoose";
import { ContentSchema } from "../models";
import { Request, Response } from "express";

const Content = mongoose.model("Contact", ContentSchema);

interface ContentType {
  type: string;
  title?: string;
  body: string;
}

const isValid = (content: ContentType) =>
  content.type &&
  (content.type === "article" ? content.body && content.title : content.body);

export class Controller {
  public addNewContent = (req: Request, res: Response) => {
    if (!isValid(req.body)) {
      res.statusMessage = "Post/Article is not valid!";
      return res.send(400).end();
    }
    let delayTime = 1;
    let delay = false;
    const random: number = Math.random();
    if (random < 0.1) {
      return res.status(500).send(new Error());
    }
    if (random < 0.2) {
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
    let delayTime = 1;
    let delay = false;
    const random: number = Math.random();
    if (random < 0.2) {
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
