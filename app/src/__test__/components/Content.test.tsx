import React from "react";
import renderer from "react-test-renderer";

import { ContentComponent } from "../../components/Post";

const mockContent = {
  _id: "5c65c766ab959d35564bf3f7",
  type: "post",
  body: "Something good",
  created_date: "2019-02-14T19:54:14.395Z",
  __v: 0
};

describe("Content", () => {
  it("should be rendered without crash", () => {
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
