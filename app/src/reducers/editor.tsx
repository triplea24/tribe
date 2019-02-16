import { AnyAction } from "redux";

import {
  CHANGE_EDITOR_MODE,
  CHANGE_BODY_CONTENT,
  CHANGE_TITLE,
  RESET_EDITOR,
  SHOW_EDITOR_ERROR,
  DISMISS_EDITOR_ERROR
} from "../actions";

const INITIAL_MODE = "article";

export interface State {
  mode: string;
  body: string;
  title: string;
  error: boolean;
  errorMessage: string;
}

export const initialState: State = {
  mode: INITIAL_MODE,
  body: "",
  title: "",
  error: true,
  errorMessage: ""
};

export default (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case CHANGE_EDITOR_MODE:
      return { ...state, error: false, mode: action.payload };
    case CHANGE_BODY_CONTENT:
      return { ...state, error: false, body: action.payload };
    case CHANGE_TITLE:
      return { ...state, error: false, title: action.payload };
    case SHOW_EDITOR_ERROR:
      return { ...state, error: true, errorMessage: action.payload };
    case DISMISS_EDITOR_ERROR:
      return { ...state, error: false };
    case RESET_EDITOR:
      return { ...state, error: false, body: "", title: "" };
  }
  return state;
};
