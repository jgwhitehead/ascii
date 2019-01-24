import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  render() {
    let styles = {
      paddingTop: "30px"
    };

    return (
      <div className="App" style={styles}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextInput />
          </Grid>
          <Grid item xs={12}>
            <TextOutput />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
