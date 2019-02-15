import { omit, merge, assoc } from "ramda";

import {
  ADD_CONTENT,
  CHANGE_EDITOR_MODE,
  CHANGE_BODY_CONTENT,
  CHANGE_TITLE,
  RESET_EDITOR,
  REMOVE_CONTENT,
  LOAD_CONTENTS,
  SHOW_LOADING,
  DISMISS_LOADING,
  SERVER_ERROR
} from "../actions";
import { AnyAction } from "redux";
export const initialState = {
  contents: {},
  editorMode: "article",
  bodyContent: "",
  title: "",
  loading: false,
  serverError: false
};

export interface State {
  contents: object;
  editorMode: string;
  bodyContent: string;
  title: string;
  loading: boolean;
  serverError: boolean;
}

export default (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        contents: assoc(action.payload._id, action.payload, state.contents)
      };
    case CHANGE_EDITOR_MODE:
      return { ...state, editorMode: action.payload };
    case CHANGE_BODY_CONTENT:
      return { ...state, bodyContent: action.payload };
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    case RESET_EDITOR:
      return { ...state, bodyContent: "", title: "" };
    case REMOVE_CONTENT:
      return { ...state, contents: omit([action.payload], state.contents) };
    case LOAD_CONTENTS:
      return { ...state, contents: merge(state.contents, action.payload) };
    case SHOW_LOADING:
      return { ...state, loading: true };
    case DISMISS_LOADING:
      return { ...state, loading: false };
    case SERVER_ERROR:
      return { ...state, serverError: true };
  }
  return state;
};
