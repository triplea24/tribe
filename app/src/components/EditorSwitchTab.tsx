import React from "react";
import { Grid, Button, Theme } from "@material-ui/core";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import { changeEditorMode } from "../actions";
import { ReduxState } from "../reducers";

interface Props {
  classes?: any;
  mode: string;
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
    const { mode, classes } = this.props;
    const Buttons = tabs.map(({ key, text, disabled = false }) => (
      <Grid
        key={key}
        item
        lg={"auto"}
        onClick={() => !disabled && this.props.changeEditorMode(key)}
      >
        <Button
          className={
            mode === key ? classes.activeButton : classes.inactiveButton
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

const mapStateToProps = ({ editor: { mode } }: ReduxState) => ({
  mode
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

export const EditorSwitchTabComponent = withMaterialUI(EditorSwitchTab);
// TODO: Should use compose
export default withRedux(withMaterialUI(EditorSwitchTab));
