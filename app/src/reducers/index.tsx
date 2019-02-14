import { ADD_CONTENT, CHANGE_EDITOR_MODE } from "../actions";
const initialState = {
  contents: [],
  editorMode: "article"
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTENT:
      return { ...state, contents: [...state.contents, action.payload] };
    case CHANGE_EDITOR_MODE:
      return { ...state, editorMode: action.payload };
  }
  return state;
};
