import React from "react";
import { Grid, Button, Theme } from "@material-ui/core";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import { changeEditorMode } from "../actions";

interface Props {
  classes?: any;
  editorMode: string;
  changeEditorMode: Function;
}

const tabs = [
  { key: "article", text: "Article" },
  { key: "post", text: "Post" },
  { key: "question", text: "Question", disabled: true },
  { key: "event", text: "Event", disabled: true }
];

class EditorSwitchTab extends React.Component<Props> {
  render() {
    const { editorMode, classes } = this.props;
    const Buttons = tabs.map(({ key, text, disabled = false }) => (
      <Grid
        key={key}
        item
        lg={"auto"}
        onClick={() => !disabled && this.props.changeEditorMode(key)}
      >
        <Button
          className={
            editorMode === key ? classes.activeButton : classes.inactiveButton
          }
        >
          {text}
        </Button>
      </Grid>
    ));
    return (
      <Grid container spacing={8}>
        {Buttons}
      </Grid>
    );
  }
}

interface ReduxState {
  editorMode: string;
}
const mapStateToProps = ({ editorMode = "article" }: ReduxState) => ({
  editorMode
});
const withRedux = connect(
  mapStateToProps,
  { changeEditorMode }
);

const styles = (theme: Theme) => ({
  activeButton: {
    background: "#f0f3ff",
    color: "#3e3f42",
    borderRadius: 19
  },
  inactiveButton: {
    borderRadius: 19
  }
});

const withMaterialUI = withStyles(styles);

// TODO: Should use compose
export default withRedux(withMaterialUI(EditorSwitchTab));
