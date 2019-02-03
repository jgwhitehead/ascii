import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { FormControlLabel } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

@inject("store")
@observer
class TextInput extends Component {
  handleInputChanged = event => {
    this.props.store.setText(event.target.value);
  };

  toggle = () => {
    this.props.store.toggleHorizontal();
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
          <FormControlLabel
            label="Horizontal"
            labelPlacement="start"
            control={
              <Switch checked={store.horizontal} onChange={this.toggle} />
            }
          />
        </CardContent>
      </Card>
    );
  }
}
// })
// );
export default TextInput;
