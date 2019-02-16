import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Theme,
  Paper,
  TextField,
  Button,
  Avatar,
  Grid,
  Typography
} from "@material-ui/core";
import AttachmentIcon from "@material-ui/icons/Attachment";
import PhotoIcon from "@material-ui/icons/Photo";
import LibraryBookIcon from "@material-ui/icons/LibraryBooks";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import { connect } from "react-redux";

import {
  changeBody,
  addContent,
  showEditorError,
  dismissEditorError
} from "../actions";
import { ReduxState } from "../reducers";

interface Props {
  classes?: any;
  changeBody?: any;
  addContent: any;
  body?: string;
  error: boolean;
  errorMessage: string;
  showEditorError: any;
  dismissEditorError: any;
}

interface State {}

class PostEditor extends React.Component<Props, State> {
  handleChange = ({ target: { value: body } }: any) => {
    this.props.changeBody(body);
  };
  handleSubmit = () => {
    if (this.props.body === undefined || this.props.body === "") {
      return this.props.showEditorError("Post must contain some words");
    }
    this.props.addContent({
      body: this.props.body,
      type: "post"
    });
  };
  render() {
    const { classes } = this.props;
    const placeholder = `What's on your mind, Soheil?`;
    return (
      <Paper className={classes.root}>
        <Grid container spacing={8}>
          <Grid item lg={12}>
            <Avatar
              src={"https://material-ui.com/static/images/avatar/1.jpg"}
            />
            <TextField
              className={classes.body}
              multiline={true}
              fullWidth={true}
              rows={5}
              placeholder={placeholder}
              value={this.props.body}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item lg={"auto"}>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.fileButton}
            >
              <PhotoIcon />
              Photo/Video
            </Button>
          </Grid>
          <Grid item lg={"auto"}>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.fileButton}
            >
              <LibraryBookIcon />
              Article
            </Button>
          </Grid>
          <Grid item lg={"auto"}>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.fileButton}
            >
              <AttachmentIcon />
              File
            </Button>
          </Grid>
          <Grid item lg={"auto"}>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.fileButton}
            >
              <MoreIcon />
            </Button>
          </Grid>
          <Grid item lg={6} />
          <Grid item lg={1}>
            <Button className={classes.button} onClick={this.handleSubmit}>
              Post
            </Button>
          </Grid>
          <Grid item lg={12}>
            {this.props.error && (
              <Typography className={classes.error}>
                {this.props.errorMessage}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const styles = ({ spacing }: Theme) => ({
  root: {
    flexGrow: 1,
    padding: 18
  },
  body: {},
  button: {
    background: "#34aa44",
    color: "#ffffff",
    paddingLeft: 24,
    paddingRight: 24,
    paddignTop: 8,
    paddingBottom: 8,
    size: 14
  },
  avatar: {
    margin: 10
  },
  error: {
    color: "red"
  }
});

const mapStateToProps = ({
  editor: { body, error, errorMessage }
}: ReduxState) => ({ body, error, errorMessage });

const withMaterialUI = withStyles(styles);
const withRedux = connect(
  mapStateToProps,
  { changeBody, addContent, showEditorError, dismissEditorError }
);

export const PostEditorComponent = withMaterialUI(PostEditor);
export default withRedux(withMaterialUI(PostEditor));
