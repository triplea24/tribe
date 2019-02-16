import axios from "axios";
import { assoc } from "ramda";
const SERVER_BASE_URL = "http://localhost:3030";

export const ADD_CONTENT = "ADD_CONTENT";
export const CHANGE_EDITOR_MODE = "CHANGE_EDITOR_MODE";
export const CHANGE_BODY_CONTENT = "CHANGE_BODY_CONENT";
export const CHANGE_TITLE = "CHANGE_TITLE";
export const RESET_EDITOR = "RESET_EDITOR";
export const REMOVE_CONTENT = "REMOVE_CONTENT";
export const LOAD_CONTENTS = "LOAD_CONTENTS";
export const SHOW_LOADING = "SHOW_LOADING";
export const DISMISS_LOADING = "DISMISS_LOADING";
export const SERVER_ERROR = "SERVER_ERROR";
export const SHOW_EDITOR_ERROR = "SHOW_EDITOR_ERROR";
export const DISMISS_EDITOR_ERROR = "DISMISS_EDITOR_ERROR";

export const addContent = (content: any) => (dispatch: any) => {
  dispatch({ type: SHOW_LOADING });
  axios
    .post(`${SERVER_BASE_URL}/api/v1/posts`, content)
    .then(({ status, data }) => {
      if (status === 200) {
        dispatch({ type: ADD_CONTENT, payload: data });
        dispatch({ type: RESET_EDITOR });
      }
    })
    .catch(err =>
      dispatch({
        type: SHOW_EDITOR_ERROR,
        payload: "An error occured, please try again."
      })
    )
    .then(() => dispatch({ type: DISMISS_LOADING }));
};
export const showEditorError = (message: string) => (dispatch: any) => {
  dispatch({
    type: SHOW_EDITOR_ERROR,
    payload: message
  });
};
export const dismissEditorError = () => (dispatch: any) => {
  dispatch({
    type: DISMISS_EDITOR_ERROR
  });
};

export const changeEditorMode = (mode: string) => (dispatch: any) => {
  dispatch({ type: CHANGE_EDITOR_MODE, payload: mode });
};
export const changeBody = (mode: string) => (dispatch: any) => {
  dispatch({ type: CHANGE_BODY_CONTENT, payload: mode });
};
export const changeTitle = (title: string) => (dispatch: any) => {
  dispatch({ type: CHANGE_TITLE, payload: title });
};
export const resetEditor = () => (dispatch: any) => {
  dispatch({ type: RESET_EDITOR });
};

export const removeContent = (id: string) => (dispatch: any) => {
  dispatch({ type: SHOW_LOADING });
  axios
    .delete(`${SERVER_BASE_URL}/api/v1/posts/${id}`)
    .then(({ status }) => {
      if (status === 200) {
        dispatch({ type: REMOVE_CONTENT, payload: id });
      }
    })
    .catch(err => console.log(err)) // TODO: Can be shown in Snack
    .then(() => dispatch({ type: DISMISS_LOADING }));
};

export const loadContents = () => (dispatch: any) => {
  dispatch({ type: SHOW_LOADING });
  axios
    .get(`${SERVER_BASE_URL}/api/v1/posts`)
    .then(({ status, data }) => {
      if (status === 200) {
        // const reducer = (acc: any, cur: any) => assoc(cur.id, cur, acc);
        console.log("data", data);
        const contents = data.reduce((obj: any, item: any) => {
          obj[item._id] = item;
          return obj;
        }, {});
        console.log("contents", contents);
        // const contents = data.reduce(reducer, {});
        dispatch({ type: LOAD_CONTENTS, payload: contents });
      }
    })
    .catch(() => dispatch({ type: SERVER_ERROR }))
    .then(() => dispatch({ type: DISMISS_LOADING }));
};
