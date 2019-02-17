import React from "react";
import renderer from "react-test-renderer";

import { PostEditorComponent } from "../../components/PostEditor";

describe("PostEditor", () => {
  it("should be rendered without crash", () => {
    const tree = renderer
      .create(
        <PostEditorComponent
          error={false}
          errorMessage={""}
          showEditorError={() => {}}
          dismissEditorError={() => {}}
          body={"Something"}
          addContent={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
