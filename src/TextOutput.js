import React, { Component } from "react";
import { observable, computed, action } from "mobx";
import { inject, observer } from "mobx-react";
import { Figlet } from "./figlet-js/figlet";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

// const store = inject("store");

// const TextInput = inject("store");
// observer(({ store }) => {
@inject("store")
@observer
class TextOutput extends Component {
  @computed
  get output() {
    var figlet = new Figlet();
    return figlet.write(
      this.props.store.inputText,
      this.props.font,
      this.props.store.horizontal
    );
  }

  copyToClipboard = e => {
    const copyText = this.pre.textContent;

    const textArea = document.createElement("textarea");
    // textArea.style =
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
  };
  render() {
    const { store } = this.props;

    let cardStyle = {
      "margin-top": "30px"
    };

    return (
      <Card style={cardStyle} raised="True">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.font.charAt(0).toUpperCase() + this.props.font.slice(1)}
          </Typography>
          <pre ref={pre => (this.pre = pre)}>{this.output}</pre>
          <div>
            <Fab
              size="small"
              color="primary"
              aria-label="Copy"
              onClick={this.copyToClipboard}
            >
              <Icon>file_copy</Icon>
            </Fab>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default TextOutput;
