import React, { Component } from "react";
import { observable, computed, action } from "mobx";
import { inject, observer } from "mobx-react";
import { Figlet } from "./figlet-js/figlet";
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

  render() {
    const { store } = this.props;

    let cardStyle = {
      "margin-top": "30px",
      "box-shadow": "5px 5px 5px  #808080a1"
    };

    return (
      <Card style={cardStyle}>
        <CardContent>
          <h1>{this.props.font}</h1>
          <pre>{this.output}</pre>
        </CardContent>
      </Card>
    );
  }
}

export default TextOutput;
