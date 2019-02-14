import React from "react";
import { Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { connect } from "react-redux";

import Content from "./Content";

interface Props {
  classes?: any;
  contents: any;
}

class ContentList extends React.Component<Props> {
  render() {
    const { classes, contents } = this.props;
    return (
      <List className={classes.root}>
        {contents &&
          Object.keys(contents).map(key => {
            const object = contents[key];
            const { id, type, body, title } = object;
            return (
              <Content
                key={id + ""}
                type={type}
                title={title}
                body={body}
                avatar={"https://material-ui.com/static/images/avatar/1.jpg"}
                avatarAlt={"Soheil Alavi"}
              />
            );
          })}
      </List>
    );
  }
}

const styles = (theme: Theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

const mapStateToProps = ({ contents }: any) => ({
  contents
});
const withRedux = connect(mapStateToProps);
const withMaterialUI = withStyles(styles);

export default withRedux(withMaterialUI(ContentList));
