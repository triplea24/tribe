import configureStore from "redux-mock-store";
import ReduxThunk from "redux-thunk";

import reducers from "../../reducers";
import {
  CHANGE_EDITOR_MODE,
  CHANGE_BODY_CONTENT,
  CHANGE_TITLE,
  RESET_EDITOR
} from "../../actions";

const middlewares = [ReduxThunk];

const mockStore = configureStore(middlewares);
const initialState = {
  contents: {},
  editorMode: "article",
  bodyContent: "",
  title: ""
};

describe("Reducers", () => {
  describe("initial state", () => {
    const store = mockStore(initialState);
    it("should match a snapshot", () => {
      const initialState = store.getState();
      expect(initialState).toMatchSnapshot();
    });
  });

  describe("Editor mode", () => {
    const store = mockStore(initialState);
    it("it should change to post and vice versa", () => {
      const initialState: any = store.getState();
      let newState = reducers(initialState, {
        type: CHANGE_EDITOR_MODE,
        payload: "post"
      });
      expect(newState.editorMode).toBe("post");
      newState = reducers(initialState, {
        type: CHANGE_EDITOR_MODE,
        payload: "article"
      });
      expect(newState.editorMode).toBe("article");
    });
  });

  describe("Body content", () => {
    const store = mockStore(initialState);
    it("it should change body content", () => {
      const initialState: any = store.getState();
      const bodyContent = "Something";
      let newState = reducers(initialState, {
        type: CHANGE_BODY_CONTENT,
        payload: bodyContent
      });
      expect(newState.bodyContent).toBe(bodyContent);
      expect(newState).toMatchSnapshot();
    });
  });
  describe("Title", () => {
    const store = mockStore(initialState);
    it("it should change title", () => {
      const initialState: any = store.getState();
      const title = "Some cool title";
      let newState = reducers(initialState, {
        type: CHANGE_TITLE,
        payload: title
      });
      expect(newState.title).toBe(title);
      expect(newState).toMatchSnapshot();
    });
  });

  describe("Reset editor", () => {
    const store = mockStore(initialState);
    it("It should remove title and body", () => {
      const initialState: any = store.getState();
      const title = "Some cool title";
      const bodyContent = "Some cool boy content";
      let newState = reducers(initialState, {
        type: CHANGE_TITLE,
        payload: title
      });
      newState = reducers(newState, {
        type: CHANGE_BODY_CONTENT,
        payload: bodyContent
      });
      newState = reducers(newState, {
        type: RESET_EDITOR
      });
      expect(newState.title).toBe("");
      expect(newState.bodyContent).toBe("");
    });
  });
});
