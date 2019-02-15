import React from "react";
import renderer from "react-test-renderer";

import { EditorSwitchTabComponent } from "../../components/EditorSwitchTab";

describe("EditorSwitchTab", () => {
  it("should be rendered without crash", () => {
    const tree = renderer
      .create(
        <EditorSwitchTabComponent
          editorMode={"article"}
          changeEditorMode={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
