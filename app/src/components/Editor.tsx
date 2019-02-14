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
    if (type === EditorType.Post) {
      return <PostEditor />;
    }
    return <ArticleEditor />;
  }
}

interface ReduxState {
  editorMode: string;
  title?: string;
  bodyContent: string;
}

const defaultEditorMode = "article";

const mapStateToProps = ({
  editorMode = defaultEditorMode,
  title,
  bodyContent
}: ReduxState) => ({
  type: editorMode === "article" ? EditorType.Article : EditorType.Post,
  title,
  bodyContent
});
const withRedux = connect(mapStateToProps);

export default withRedux(Editor);
