import { AnyAction } from "redux";

import {
  SHOW_LOADING,
  DISMISS_LOADING,
  SHOW_SERVER_ERROR,
  SHOW_SNACK_ERROR,
  DISMISS_SNACK_ERROR
} from "../actions";

export interface State {
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

export const initialState: State = {
  loading: false,
  error: false,
  errorMessage: ""
};

export default (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, loading: true };
    case DISMISS_LOADING:
      return { ...state, loading: false };
    case SHOW_SNACK_ERROR:
      return { ...state, error: true, errorMessage: action.payload };
    case DISMISS_SNACK_ERROR:
      return { ...state, error: false };
    case SHOW_SERVER_ERROR:
      return { ...state, error: true };
  }
  return state;
};
