import React from "react";
import { Theme, Button, SnackbarContent, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

interface Props {
  classes?: any;
  serverError: boolean;
}
const action = (
  <Button color="secondary" size="small" href=".">
    Refresh
  </Button>
);
class Loading extends React.Component<Props> {
  render() {
    const { classes, serverError = false } = this.props;
    if (!serverError) return <></>;
    return (
      <SnackbarContent
        className={classes.snackbar}
        message="Can not connect to server"
        action={action}
      />
    );
  }
}

const styles = (theme: Theme) => ({
  snackbar: {
    margin: theme.spacing.unit
  }
});

interface ReduxState {
  serverError: boolean;
}
const mapStateToProps = ({ serverError }: ReduxState) => ({
  serverError
});
const withRedux = connect(
  mapStateToProps,
  {}
);
const withMaterialUI = withStyles(styles);
export default withRedux(withMaterialUI(Loading));
