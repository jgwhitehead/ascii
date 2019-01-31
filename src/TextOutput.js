import React, { Component } from "react";
import { observable, computed, action } from "mobx";
import { inject, observer } from "mobx-react";
import { Figlet } from "./figlet-js/figlet";

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
    console.log(store);

    return (
      <div>
        <h1>{this.props.font}</h1>
        <pre>{this.output}</pre>
      </div>
    );
  }
}

export default TextOutput;
