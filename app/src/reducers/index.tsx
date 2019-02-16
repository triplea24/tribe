import { combineReducers } from "redux";

import app, { State as RAppState } from "./app";
import editor, { State as REditorState } from "./editor";
import posts, { State as RPostState } from "./posts";

export interface ReduxState {
  app: RAppState;
  editor: REditorState;
  posts: RPostState;
}

export default combineReducers({
  app,
  editor,
  posts
});
