import { REMOVE_CONTENT, LOAD_CONTENTS, ADD_CONTENT } from "../../../actions";
import reducers, { State, initialState } from "../../../reducers/posts";

const POST1 = { _id: "1", type: "post", body: "Post 1" };
const POST2 = { _id: "2", type: "post", body: "Post 2" };
const ARTICLE1 = { _id: "3", type: "article", title: "1", body: "Article 1" };
const ARTICLE2 = { _id: "4", type: "article", title: "2", body: "Article 2" };

const state: State = {
  ...initialState,
  data: {
    1: POST1,
    2: POST2,
    3: ARTICLE1
  }
};
describe("posts reducer", () => {
  it("add new content", () => {
    let newState: State = reducers(state, {
      type: ADD_CONTENT,
      payload: ARTICLE2
    });
    expect(Object.keys(newState.data)).toHaveLength(
      Object.keys(state.data).length + 1
    );
    expect(Object.keys(newState.data)).toContain(ARTICLE2._id);
  });
  it("update existing content", () => {
    let newState: State = reducers(state, {
      type: ADD_CONTENT,
      payload: ARTICLE1
    });
    expect(Object.keys(newState.data)).toHaveLength(
      Object.keys(state.data).length
    );
    expect(Object.keys(newState.data)).toContain(ARTICLE1._id);
  });
  it("remove a content", () => {
    let newState: State = reducers(state, {
      type: REMOVE_CONTENT,
      payload: ARTICLE1._id
    });
    expect(Object.keys(newState.data)).toHaveLength(
      Object.keys(state.data).length - 1
    );
    expect(Object.keys(newState.data)).not.toContain(ARTICLE1._id);
  });
  it("Load contents", () => {
    const data = {
      1: POST1,
      2: POST2,
      3: ARTICLE1
    };
    let newState: State = reducers(initialState, {
      type: LOAD_CONTENTS,
      payload: data
    });
    expect(Object.keys(newState.data)).toHaveLength(
      Object.keys(state.data).length
    );
    expect(newState.data).toEqual(data);
  });
});
