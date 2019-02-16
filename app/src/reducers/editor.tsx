import { AnyAction } from "redux";

import {
  CHANGE_EDITOR_MODE,
  CHANGE_BODY_CONTENT,
  CHANGE_TITLE,
  RESET_EDITOR
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
      return { ...state, mode: action.payload };
    case CHANGE_BODY_CONTENT:
      return { ...state, body: action.payload };
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    case RESET_EDITOR:
      return { ...state, body: "", title: "" };
  }
  return state;
};
