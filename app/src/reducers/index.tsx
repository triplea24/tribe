import {
  ADD_CONTENT,
  CHANGE_EDITOR_MODE,
  CHANGE_BODY_CONTENT,
  CHANGE_TITLE
} from "../actions";
const initialState = {
  contents: [],
  editorMode: "article",
  bodyContent: "",
  title: ""
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTENT:
      return { ...state, contents: [...state.contents, action.payload] };
    case CHANGE_EDITOR_MODE:
      return { ...state, editorMode: action.payload };
    case CHANGE_BODY_CONTENT:
      return { ...state, bodyContent: action.payload };
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
  }
  return state;
};
