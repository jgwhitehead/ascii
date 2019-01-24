import React, { Component } from "react";
import { inject, observer } from "mobx-react";

// const store = inject("store");

// const TextInput = inject("store");
// observer(({ store }) => {
@inject("store")
@observer
class TextOutput extends Component {
  render() {
    const { store } = this.props;
    console.log(store);

    return (
      <div>
        <h1>Output</h1>
        <pre>{store.outputText}</pre>
      </div>
    );
  }
}

export default TextOutput;
