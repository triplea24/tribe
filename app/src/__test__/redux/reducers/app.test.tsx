import reducers, { State, initialState } from "../../../reducers/app";

import {
  SHOW_LOADING,
  DISMISS_LOADING,
  SHOW_SERVER_ERROR,
  SHOW_SNACK_ERROR,
  DISMISS_SNACK_ERROR
} from "../../../actions";

describe("app reducer", () => {
  it("Show loading", () => {
    let newState: State = reducers(initialState, {
      type: SHOW_LOADING
    });
    expect(newState.loading).toBeTruthy();
  });
  it("Dismiss loading", () => {
    const state = {
      ...initialState,
      loading: true
    };
    let newState: State = reducers(state, {
      type: DISMISS_LOADING
    });
    expect(newState.loading).toBeFalsy();
  });
  it("Show server error", () => {
    let newState: State = reducers(initialState, {
      type: SHOW_SERVER_ERROR
    });
    expect(newState.error).toBeTruthy();
    expect(newState.errorMessage).toBeFalsy();
  });
  it("Show snack error", () => {
    const message = "Some error";
    let newState: State = reducers(initialState, {
      type: SHOW_SNACK_ERROR,
      payload: message
    });
    expect(newState.error).toBeTruthy();
    expect(newState.errorMessage).toEqual(message);
  });
  it("Dismiss snack error", () => {
    const state = {
      ...initialState,
      error: true,
      errorMessage: "Something"
    };
    let newState: State = reducers(state, {
      type: DISMISS_SNACK_ERROR
    });
    expect(newState.error).toBeFalsy();
  });
});
