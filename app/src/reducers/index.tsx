import { ADD_CONTENT } from "../actions";
const initialState = {
  contents: []
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTENT:
      return { ...state, contents: [...state.contents, action.payload] };
  }
  return state;
};
