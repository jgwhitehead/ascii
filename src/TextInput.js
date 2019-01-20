import React, { Component } from "react";
import { inject, observer } from "mobx-react";

// const store = inject("store");

// const TextInput = inject("store");
// observer(({ store }) => {
@inject("store")
@observer
class TextInput extends Component {
  handleInputChanged = event => {
    const { store } = this.props;
    store.setText(event.target.value);
  };

  render() {
    const { store } = this.props;
    console.log(store);
    // const { store } = this.props;
    return (
      <div>
        <h1>Input</h1>
        <input value={store.inputText} onChange={this.handleInputChanged} />
      </div>
    );
  }
}
// })
// );
export default TextInput;
