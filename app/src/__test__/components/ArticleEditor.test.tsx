import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import { ArticleEditorComponent } from "../../components/ArticleEditor";

describe("ArticleEditor", () => {
  it("should be rendered without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ArticleEditorComponent
        title={"Something"}
        body={"Something"}
        error={false}
        errorMessage={""}
        addContent={() => {}}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
    // const tree = renderer.create().toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
