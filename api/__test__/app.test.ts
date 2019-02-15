import * as request from "supertest";
import * as mongoose from "mongoose";

import { App } from "../lib/app";

import { ContentSchema } from "../lib/models";
const Content = mongoose.model("Contact", ContentSchema);

jest.setTimeout(10000);

describe("Api", () => {
  it("GET /api/v1/posts", done => {
    const app = new App().app;
    new Content({
      type: "Post",
      body: "Post"
    }).save(async (err, content) => {
      if (!err) {
        const result = await request(app)
          .get("/api/v1/posts")
          .set("Accept", "application/json");
        expect(result.statusCode).toEqual(200);
        return Content.count({}, (err, count) => {
          expect(result.body).toBeInstanceOf(Array);
          expect(result.body).toHaveLength(count);
          done();
        });
      }
      done();
    });
  });
  describe("POST /api/v1/posts", () => {
    it("list all the posts", async done => {
      const app = new App().app;
      const type = "post";
      const body = "Some cool body";
      const result = await request(app)
        .post("/api/v1/posts")
        .set("Accept", "application/json")
        .send({ type, body });
      expect(result.statusCode).toEqual(200);
      expect(result.body).toHaveProperty("_id");
      // expect(result.body).toContain()
      const { _id } = result.body;
      Content.find({ _id }, (err, [content]) => {
        const res = JSON.parse(JSON.stringify(content));
        expect(res).toHaveProperty("_id", _id);
        expect(res).toHaveProperty("type", type);
        expect(res).toHaveProperty("body", body);
        done();
      });
    });
    it("validation error for missing type", async () => {
      const app = new App().app;
      const body = "Some cool body";
      const result = await request(app)
        .post("/api/v1/posts")
        .set("Accept", "application/json")
        .send({ body });
      expect(result.statusCode).toEqual(400);
    });
    it("validation error for missing body", async () => {
      const app = new App().app;
      const type = "post";
      const result = await request(app)
        .post("/api/v1/posts")
        .set("Accept", "application/json")
        .send({ type });
      expect(result.statusCode).toEqual(400);
    });
    it("validation error for missing title of article", async () => {
      const app = new App().app;
      const body = "Some cool body";
      const type = "article";
      const result = await request(app)
        .post("/api/v1/posts")
        .set("Accept", "application/json")
        .send({ type, body });
      expect(result.statusCode).toEqual(400);
    });
  });
  it("DELETE /api/v1/posts/:id", async done => {
    const app = new App().app;
    new Content({
      type: "Post",
      body: "Post"
    }).save(async (err, content) => {
      if (!err) {
        const { _id } = JSON.parse(JSON.stringify(content));
        const result = await request(app)
          .delete(`/api/v1/posts/${_id}`)
          .set("Accept", "application/json");
        expect(result.statusCode).toEqual(200);
        return Content.find({ _id }, (err, count) => {
          expect(err).not.toBeUndefined();
          done();
        });
      }
      done();
    });
  });
  beforeEach(() => {});
  afterEach(done => {
    mongoose.connection.close(done);
  });
});
