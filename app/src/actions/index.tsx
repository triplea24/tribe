export const ADD_CONTENT = "ADD_CONTENT";
export const CHANGE_EDITOR_MODE = "CHANGE_EDITOR_MODE";
export const CHANGE_BODY_CONTENT = "CHANGE_BODY_CONENT";
export const CHANGE_TITLE = "CHANGE_TITLE";
export const addContent = (content: any) => (dispatch: any) => {
  dispatch({ type: ADD_CONTENT, payload: content });
};
export const changeEditorMode = (mode: string) => (dispatch: any) => {
  dispatch({ type: CHANGE_EDITOR_MODE, payload: mode });
};
export const changeBodyContent = (mode: string) => (dispatch: any) => {
  dispatch({ type: CHANGE_BODY_CONTENT, payload: mode });
};
export const changeTitle = (title: string) => (dispatch: any) => {
  dispatch({ type: CHANGE_TITLE, payload: title });
};
