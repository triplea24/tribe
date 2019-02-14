export const ADD_CONTENT = "ADD_CONTENT";
export const CHANGE_EDITOR_MODE = "CHANGE_EDITOR_MODE";
export const addContent = (content: any) => (dispatch: any) => {
  dispatch({ type: ADD_CONTENT, payload: content });
};
export const changeEditorMode = (mode: string) => (dispatch: any) => {
  dispatch({ type: CHANGE_EDITOR_MODE, payload: mode });
};
