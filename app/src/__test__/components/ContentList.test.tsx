import React from "react";
import renderer from "react-test-renderer";
import { times, assoc } from "ramda";

import { ContentListComponent } from "../../components/ContentList";
jest.mock("../../components/Content", () => () => "Content");

const mockContent = {
  _id: "5c65c766ab959d35564bf3f7",
  type: "post",
  body: "Something good",
  created_date: "2019-02-14T19:54:14.395Z",
  __v: 0
};

describe("Content List", () => {
  it("match the snapshot", () => {
    const contents = times((n: number) => {
      return { ...mockContent, _id: mockContent._id + n };
    }, 10).reduce((obj: any, item: any) => assoc(item._id, item, obj), {});
    const tree = renderer
      .create(
        <ContentListComponent contents={contents} loadContents={() => {}} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
