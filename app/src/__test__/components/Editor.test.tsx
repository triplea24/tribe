import React from "react";
import renderer from "react-test-renderer";

import { EditorComponent, EditorType } from "../../components/Editor";

jest.mock("../../components/ArticleEditor", () => () => "ArticleEditor");
jest.mock("../../components/PostEditor", () => () => "PostEditor");

describe("EditorSwitchTab", () => {
  it("Article type should be rendered without crash", () => {
    const tree = renderer
      .create(<EditorComponent type={EditorType.Article} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Post type should be rendered without crash", () => {
    const tree = renderer
      .create(<EditorComponent type={EditorType.Post} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
