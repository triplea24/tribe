import React from "react";
import { Theme, Button } from "@material-ui/core";
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

class Content extends React.Component<Props> {
  handleDelete = () => {
    this.props.removeContent(this.props.id);
  };
  render() {
    const { classes } = this.props;
    return (
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
        <Button onClick={this.handleDelete}>
          <DeleteIcon />
        </Button>
      </ListItem>
    );
  }
}

const withRedux = connect(
  null,
  { removeContent }
);
const withMaterialUI = withStyles(styles);

export default withRedux(withMaterialUI(Content));
