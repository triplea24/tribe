import React from "react";
import { Theme, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { connect } from "react-redux";

import Content from "./Content";
import { loadContents } from "../actions";

interface Props {
  classes?: any;
  contents: any;
  loadContents: any;
}

class ContentList extends React.Component<Props> {
  render() {
    const { classes, contents } = this.props;
    return (
      <List className={classes.root}>
        {contents &&
          Object.keys(contents)
            .reverse()
            .map(key => {
              const object = contents[key];
              const { _id, type, body, title } = object;
              return (
                <React.Fragment key={_id}>
                  <Content
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

const mapStateToProps = ({ contents }: any) => ({
  contents
});
const withRedux = connect(
  mapStateToProps,
  { loadContents }
);

export const ContentListComponent = withMaterialUI(ContentList);
export default withRedux(withMaterialUI(ContentList));
