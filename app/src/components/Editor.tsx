import React from "react";
import PostEditor from "./PostEditor";
import ArticleEditor from "./ArticleEditor";
import { connect } from "react-redux";

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
    console.log("editor type is ", type);
    if (type === EditorType.Post) {
      return <PostEditor />;
    }
    return <ArticleEditor />;
  }
}

interface ReduxState {
  editorMode?: string;
}

const defaultEditorMode = "article";

const mapStateToProps = ({ editorMode = defaultEditorMode }: ReduxState) => ({
  type: editorMode === "article" ? EditorType.Article : EditorType.Post
});
const withRedux = connect(mapStateToProps);

export default withRedux(Editor);
