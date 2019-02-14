import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContentSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  body: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
