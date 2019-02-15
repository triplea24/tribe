import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import Content, { ContentComponent } from "../../components/Content";
import { initialState } from "../../reducers";

const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

const mockContent = {
  _id: "5c65c766ab959d35564bf3f7",
  type: "post",
  body: "Something good",
  created_date: "2019-02-14T19:54:14.395Z",
  __v: 0
};

describe("Content", () => {
  it("renders without crashing", () => {
    const store = mockStore(initialState);
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Content
          id={mockContent._id}
          type={mockContent.type}
          body={mockContent.body}
          avatar={"https://material-ui.com/static/images/avatar/1.jpg"}
          avatarAlt={"Soheil Alavi"}
        />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("match the snapshot", () => {
    const tree = renderer
      .create(
        <ContentComponent
          removeContent={() => {}}
          id={mockContent._id}
          type={mockContent.type}
          body={mockContent.body}
          avatar={"https://material-ui.com/static/images/avatar/1.jpg"}
          avatarAlt={"Soheil Alavi"}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
