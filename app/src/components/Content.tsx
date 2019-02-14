import React from "react";
import { Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

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
}

class Content extends React.Component<Props> {
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
      </ListItem>
    );
  }
}

export default withStyles(styles)(Content);
