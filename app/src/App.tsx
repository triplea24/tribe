import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { withStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import reducers from "./reducers";
import Editor from "./components/Editor";
import EditorSwitchTab from "./components/EditorSwitchTab";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

interface Props {
  classes?: any;
}
class App extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item lg={12}>
              <EditorSwitchTab />
            </Grid>
            <Grid item lg={12}>
              <Editor />
            </Grid>
          </Grid>
        </div>
      </Provider>
    );
  }
}

const styles = ({ spacing }: Theme) => ({
  root: {
    paddingTop: spacing.unit * 20,
    paddingLeft: 123,
    paddingRight: 163,
    alignItems: "center",
    justifyContent: "center"
  }
});

const withMaterialUI = withStyles(styles);

// TODO: Should use compose here
export default withMaterialUI(App);
