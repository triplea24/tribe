import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import AttachmentIcon from "@material-ui/icons/Attachment";
import PhotoIcon from "@material-ui/icons/Photo";
import LibraryBookIcon from "@material-ui/icons/LibraryBooks";
import MoreIcon from "@material-ui/icons/MoreHoriz";

interface Props {
  classes?: any;
}

class PostEditor extends React.Component<Props> {
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
          <Grid item lg={1} justify={"flex-end"}>
            <Button className={classes.button}>Post</Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const styles = ({ spacing }: Theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 123,
    marginRight: 163,
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
  }
});

export default withStyles(styles)(PostEditor);
