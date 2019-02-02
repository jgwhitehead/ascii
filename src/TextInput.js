import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
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

    return (
      <Card raised="True">
        <CardContent>
          <TextField
            label="Input"
            variant="outlined"
            value={store.inputText}
            onChange={this.handleInputChanged}
          />
        </CardContent>
      </Card>
    );
  }
}
// })
// );
export default TextInput;
