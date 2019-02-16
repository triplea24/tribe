import { AnyAction } from "redux";
import { omit, merge, assoc } from "ramda";

import { REMOVE_CONTENT, LOAD_CONTENTS, ADD_CONTENT } from "../actions";

export interface State {
  data: object;
}
export const initialState: State = {
  data: {}
};

export default (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        data: assoc(action.payload._id, action.payload, state.data)
      };
    case REMOVE_CONTENT:
      return { ...state, data: omit([action.payload], state.data) };
    case LOAD_CONTENTS:
      return { ...state, data: merge(state.data, action.payload) };
  }
  return state;
};
