import {
  CHANGE_EDITOR_MODE,
  CHANGE_BODY_CONTENT,
  CHANGE_TITLE,
  RESET_EDITOR,
  SHOW_EDITOR_ERROR,
  DISMISS_EDITOR_ERROR
} from "../../../actions";
import reducers, { State, initialState } from "../../../reducers/editor";

describe("editor reducer", () => {
  it("Change editor mode from post to article", () => {
    const state: State = {
      ...initialState,
      mode: "post"
    };
    let newState: State = reducers(state, {
      type: CHANGE_EDITOR_MODE,
      payload: "article"
    });
    expect(newState.mode).toEqual("article");
    expect(newState.error).toBeFalsy();
  });
  it("Change editor mode from article to post", () => {
    const state: State = {
      ...initialState,
      mode: "article"
    };
    let newState: State = reducers(state, {
      type: CHANGE_EDITOR_MODE,
      payload: "post"
    });
    expect(newState.mode).toEqual("post");
    expect(newState.error).toBeFalsy();
  });
  it("Change the body", () => {
    const body = "Some cool content";
    let newState: State = reducers(initialState, {
      type: CHANGE_BODY_CONTENT,
      payload: body
    });
    expect(newState.body).toEqual(body);
    expect(newState.error).toBeFalsy();
  });
  it("Change the title", () => {
    const title = "Some title";
    let newState: State = reducers(initialState, {
      type: CHANGE_TITLE,
      payload: title
    });
    expect(newState.title).toEqual(title);
    expect(newState.error).toBeFalsy();
  });
  it("Reset the editor", () => {
    let newState: State = reducers(initialState, {
      type: RESET_EDITOR
    });
    expect(newState.title).toBeFalsy();
    expect(newState.body).toBeFalsy();
    expect(newState.error).toBeFalsy();
  });
  it("Shows the editor error", () => {
    const errorMessage = "Some error";
    let newState: State = reducers(initialState, {
      type: SHOW_EDITOR_ERROR,
      payload: errorMessage
    });
    expect(newState.error).toBeTruthy();
    expect(newState.errorMessage).toEqual(errorMessage);
  });
  it("Dismiss the editor error", () => {
    const state = {
      ...initialState,
      error: true
    };
    let newState: State = reducers(state, {
      type: DISMISS_EDITOR_ERROR
    });
    expect(newState.error).toBeFalsy();
  });
});
