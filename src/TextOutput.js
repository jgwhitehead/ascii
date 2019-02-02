import React, { Component } from "react";
import { observable, computed, action } from "mobx";
import { inject, observer } from "mobx-react";
import { Figlet } from "./figlet-js/figlet";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// const store = inject("store");

// const TextInput = inject("store");
// observer(({ store }) => {
@inject("store")
@observer
class TextOutput extends Component {
  @computed
  get output() {
    var figlet = new Figlet();
    return figlet.write(this.props.store.inputText, this.props.font);
  }

  // textAreaRef = useRef(null);

  // copyToClipboard(e) {
  //   this.textAreaRef.current.select();
  //   document.execCommand("copy");
  //   // e.target.focus();
  // }
  copyToClipboard = e => {
    // this.pre.select();
    // document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.

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

    // const textAreaRef = useRef(null);

    // function copyToClipboard(e) {
    //   // this.textAreaRef.current.select();
    //   // document.execCommand("copy");
    //   // e.target.focus();
    //   // // e.target.focus();

    //   textarea.select();
    //   document.execCommand("copy");
    // }

    return (
      <Card style={cardStyle} raised="True">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.font.charAt(0).toUpperCase() + this.props.font.slice(1)}
          </Typography>
          {/* <h1>{this.props.font}</h1> */}
          <pre ref={pre => (this.pre = pre)}>{this.output}</pre>
          <div>
            <button onClick={this.copyToClipboard}>Copy</button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default TextOutput;
