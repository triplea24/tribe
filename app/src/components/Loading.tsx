import React from "react";
import {
  Theme,
  DialogContent,
  Dialog,
  CircularProgress
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

interface Props {
  classes?: any;
  loading: boolean;
}
class Loading extends React.Component<Props> {
  render() {
    const { classes, loading } = this.props;
    return (
      <Dialog open={loading} className={classes.root}>
        <DialogContent>
          <CircularProgress className={classes.progress} />
        </DialogContent>
      </Dialog>
    );
  }
}

const styles = (theme: Theme) => ({
  root: {
    width: "200px",
    marginLeft: "40%",
    backgroundColor: "transparent"
  },
  progress: {}
});

interface ReduxState {
  loading: boolean;
}
const mapStateToProps = ({ loading }: ReduxState) => ({
  loading
});
const withRedux = connect(
  mapStateToProps,
  {}
);
const withMaterialUI = withStyles(styles);
export default withRedux(withMaterialUI(Loading));
