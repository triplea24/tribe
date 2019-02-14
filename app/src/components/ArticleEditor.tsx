import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Theme,
  Typography,
  Paper,
  TextField,
  Button,
  Grid
} from "@material-ui/core";
import AttachmentIcon from "@material-ui/icons/Attachment";
import Chip from "@material-ui/core/Chip";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from "draft-js";
import { connect } from "react-redux";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { changeBodyContent, changeTitle, addContent } from "../actions";

interface Props {
  classes?: any;
  changeBodyContent?: any;
  changeTitle?: any;
  addContent?: any;
  body: string;
  title: string;
}
interface State {
  editorState: EditorState;
  error: string;
}

const chips = [
  { key: "0", label: "OC" },
  { key: "1", label: "SPOILER" },
  { key: "2", label: "NSFW" }
];

class ArticleEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: "",
      editorState: EditorState.createWithContent(
        ContentState.createFromText(props.body)
      )
    };
  }
  onEditorStateChange = (editorState: EditorState) => {
    this.setState(
      {
        error: "",
        editorState
      },
      () => {
        this.props.changeBodyContent(
          // TODO: Not plaintext here!
          editorState.getCurrentContent().getPlainText()
        );
      }
    );
  };

  handleChangeTitle = ({ target: { value: body } }: any) => {
    if (this.state.error !== "") this.setState({ error: "" });
    this.props.changeTitle(body);
  };

  handleSubmit = () => {
    const { title } = this.props;
    if (title === "") {
      return this.setState({
        error: "Title must not be empty!"
      });
    }
    const body = this.state.editorState.getCurrentContent().getPlainText();
    if (body === "") {
      return this.setState({
        error: "Body of the Article must not be empty!"
      });
    }
    this.props.addContent({
      body,
      title,
      type: "article"
    });
    this.setState({ editorState: EditorState.createEmpty() });
  };

  render() {
    const { classes } = this.props;
    const bodyPlaceholder = `Text ... (optional)`;
    const titlePlaceholder = "Title";
    const Chips = chips.map(({ label, key }) => (
      <Grid item xs={1} key={key}>
        <Chip className={classes.tag} label={label} />
      </Grid>
    ));
    return (
      <Paper className={classes.root}>
        <Grid container spacing={8}>
          <Grid item lg={12}>
            <TextField
              className={classes.title}
              multiline={true}
              fullWidth={true}
              placeholder={titlePlaceholder}
              value={this.props.title}
              onChange={this.handleChangeTitle}
            />
          </Grid>
          <Grid item lg={12}>
            <Editor
              placeholder={bodyPlaceholder}
              editorState={this.state.editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}
            />
          </Grid>
          {Chips}
          <Grid item lg={7} />
          <Grid item lg={1}>
            <Button variant="outlined" className={classes.fileButton}>
              <AttachmentIcon />
              File
            </Button>
          </Grid>
          <Grid item lg={1}>
            <Button className={classes.button} onClick={this.handleSubmit}>
              Post
            </Button>
          </Grid>
          <Grid item lg={12}>
            {this.state.error && (
              <Typography className={classes.error}>
                {this.state.error}
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
  fileButton: {
    paddingLeft: 15,
    paddingRight: 15,
    paddignTop: 8,
    paddingBottom: 8,
    size: 14
  },
  tag: {},
  error: {
    color: "red"
  }
});

const mapStateToProps = ({ bodyContent: body = "", title }: any) => ({
  title,
  body
});

const withMaterialUI = withStyles(styles);
const withRedux = connect(
  mapStateToProps,
  { changeBodyContent, changeTitle, addContent }
);

export default withRedux(withMaterialUI(ArticleEditor));
