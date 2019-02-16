import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { withStyles } from "@material-ui/core/styles";
import { Theme, Grid } from "@material-ui/core";
import { createLogger } from "redux-logger";

import reducers from "./reducers";
import Editor from "./components/Editor";
import EditorSwitchTab from "./components/EditorSwitchTab";
import ContentList from "./components/PostList";
import Loading from "./components/Loading";
import SnackBar from "./components/SnackBar";

const logger = createLogger({});
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

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
            <Grid item xs={12}>
              <EditorSwitchTab />
            </Grid>
            <Grid item xs={12}>
              <Editor />
            </Grid>
            <Grid item xs={12}>
              <ContentList />
            </Grid>
            <Grid item xs={12}>
              <SnackBar />
            </Grid>
          </Grid>
        </div>
        <Loading />
      </Provider>
    );
  }
}

const styles = ({ spacing }: Theme) => ({
  root: {
    paddingTop: spacing.unit * 5,
    paddingLeft: spacing.unit * 3,
    paddingRight: spacing.unit * 3,
    alignItems: "center",
    justifyContent: "center"
  }
});

const withMaterialUI = withStyles(styles);

// TODO: Should use compose here
export default withMaterialUI(App);
