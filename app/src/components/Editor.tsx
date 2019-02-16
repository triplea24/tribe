import React from "react";
import PostEditor from "./PostEditor";
import ArticleEditor from "./ArticleEditor";
import { connect } from "react-redux";

import { ReduxState } from "../reducers";

export enum EditorType {
  Article = "Article",
  Post = "Post"
}
interface Props {
  classes?: any;
  type?: EditorType;
}
class Editor extends React.Component<Props> {
  render() {
    const { type } = this.props;
    if (type === EditorType.Post) {
      return <PostEditor />;
    }
    return <ArticleEditor />;
  }
}

const mapStateToProps = ({ editor: { mode } }: ReduxState) => ({
  type: mode === "article" ? EditorType.Article : EditorType.Post
});

const withRedux = connect(mapStateToProps);
export const EditorComponent = Editor;
export default withRedux(Editor);
