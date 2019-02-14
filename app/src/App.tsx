import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { withStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

import reducers from "./reducers";
import ArticleEditor from "./components/ArticleEditor";

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
          <ArticleEditor />
        </div>
      </Provider>
    );
  }
}

const styles = ({ spacing }: Theme) => ({
  root: {
    paddingTop: spacing.unit * 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withStyles(styles)(App);
