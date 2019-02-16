import { AnyAction } from "redux";

import { SHOW_LOADING, DISMISS_LOADING, SERVER_ERROR } from "../actions";

export interface State {
  loading: boolean;
  serverError: boolean;
}

export const initialState: State = {
  loading: false,
  serverError: false
};

export default (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, loading: true };
    case DISMISS_LOADING:
      return { ...state, loading: false };
    case SERVER_ERROR:
      return { ...state, serverError: true };
  }
  return state;
};
