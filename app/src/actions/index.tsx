export const ADD_CONTENT = "ADD_CONTENT";
export const CHANGE_EDITOR_MODE = "CHANGE_EDITOR_MODE";
export const CHANGE_BODY_CONTENT = "CHANGE_BODY_CONENT";
export const CHANGE_TITLE = "CHANGE_TITLE";
export const RESET_EDITOR = "RESET_EDITOR";
export const addContent = (content: any) => (dispatch: any) => {
  // TODO: Request to server
  dispatch({ type: ADD_CONTENT, payload: content });
  dispatch({ type: RESET_EDITOR });
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
export const resetEditor = () => (dispatch: any) => {
  dispatch({ type: RESET_EDITOR });
};
