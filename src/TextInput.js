import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import TextField from "@material-ui/core/TextField";

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
        <TextField
          label="Input"
          variant="outlined"
          value={store.inputText}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}
// })
// );
export default TextInput;
