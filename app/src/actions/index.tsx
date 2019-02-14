export const ADD_CONTENT = "ADD_CONTENT";
export const addContent = (content: any) => (dispatch: any) => {
  dispatch({ type: ADD_CONTENT, payload: content });
};
