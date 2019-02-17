import React from "react";
import { Theme, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { connect } from "react-redux";

import Post from "./Post";
import { loadContents } from "../actions";
import { ReduxState } from "../reducers";

interface Props {
  classes?: any;
  data: any;
  loadContents: any;
}

class ContentList extends React.Component<Props> {
  render() {
    const { classes, data } = this.props;
    return (
      <List className={classes.root}>
        {data &&
          Object.keys(data)
            .reverse()
            .map(key => {
              const object = data[key];
              const { _id, type, body, title } = object;
              return (
                <React.Fragment key={_id}>
                  <Post
                    id={_id}
                    type={type}
                    title={title}
                    body={body}
                    avatar={
                      "https://material-ui.com/static/images/avatar/1.jpg"
                    }
                    avatarAlt={"Soheil Alavi"}
                  />
                  <Divider />
                </React.Fragment>
              );
            })}
      </List>
    );
  }
  componentDidMount() {
    this.props.loadContents();
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
const withMaterialUI = withStyles(styles);

const mapStateToProps = ({ posts: { data } }: ReduxState) => ({
  data
});
const withRedux = connect(
  mapStateToProps,
  { loadContents }
);

export const PostListComponent = withMaterialUI(ContentList);
export default withRedux(withMaterialUI(ContentList));
