import React from "react";
import {
  Theme,
  Button,
  SnackbarContent,
  Snackbar,
  Slide
} from "@material-ui/core";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { ReduxState } from "../reducers";
import { dismissSnackError } from "../actions";

interface Props {
  classes?: any;
  dismissSnackError: any;
  error: boolean;
  errorMessage: string;
}
const refreshAction = (
  <Button color="secondary" size="small" href=".">
    Refresh
  </Button>
);
const TransitionUp = (props: any) => {
  return <Slide {...props} direction="up" />;
};
class Loading extends React.Component<Props> {
  dismissError = () => {
    this.props.dismissSnackError();
  };
  render() {
    const { classes, error = false, errorMessage } = this.props;
    let action = refreshAction;
    let message = "Can not connect to server";
    if (errorMessage) {
      action = (
        <Button color="secondary" size="small" onClick={this.dismissError}>
          Dismiss
        </Button>
      );
      message = errorMessage;
    }
    return (
      <Snackbar
        className={classes.snackbar}
        open={error}
        onClose={this.dismissError}
        autoHideDuration={3000}
        TransitionComponent={TransitionUp}
      >
        <SnackbarContent message={message} action={action} />
      </Snackbar>
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    snackbar: {
      margin: theme.spacing.unit
    }
  });

const mapStateToProps = ({ app: { error, errorMessage } }: ReduxState) => ({
  error,
  errorMessage
});
const withRedux = connect(
  mapStateToProps,
  { dismissSnackError }
);
const withMaterialUI = withStyles(styles);
export default withRedux(withMaterialUI(Loading));
