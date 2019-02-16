import React from "react";
import {
  Theme,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Collapse
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";

import { removeContent } from "../actions";

const styles = (theme: Theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

interface Props {
  classes?: any;
  avatar: string;
  avatarAlt: string;
  type: string;
  title?: string;
  body: string;
  id: string;
  removeContent: any;
}

interface State {
  isConfirmationDialogOpen: boolean;
  visible: boolean;
}

class Content extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isConfirmationDialogOpen: false,
      visible: false
    };
  }
  handleDelete = () => {
    this.props.removeContent(this.props.id);
    this.dismissDialog();
  };
  showDialog = () => {
    this.setState({ isConfirmationDialogOpen: true });
  };
  dismissDialog = () => {
    this.setState({ isConfirmationDialogOpen: false });
  };
  componentDidMount() {
    this.setState({ visible: true });
  }
  componentWillUnmount() {
    this.setState({ visible: false });
  }
  render() {
    const { classes } = this.props;
    return (
      <Collapse in={this.state.visible} timeout={200}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={this.props.avatarAlt} src={this.props.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={this.props.type === "article" && this.props.title}
            secondary={
              <Typography
                component="span"
                className={classes.inline}
                color="textPrimary"
              >
                {this.props.body}
              </Typography>
            }
          />
          <Button onClick={this.showDialog}>
            <DeleteIcon />
          </Button>
          <Dialog
            open={this.state.isConfirmationDialogOpen}
            onClose={this.dismissDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Delete"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {`Are you sure you want to delete this ${this.props.type}?`}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.dismissDialog} color="primary">
                No
              </Button>
              <Button onClick={this.handleDelete} color={"secondary"} autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </ListItem>
      </Collapse>
    );
  }
}

const withRedux = connect(
  null,
  { removeContent }
);
const withMaterialUI = withStyles(styles);
export const ContentComponent = withMaterialUI(Content);
export default withRedux(withMaterialUI(Content));
