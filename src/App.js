import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  render() {
    let styles = {
      "padding-top": "30px"
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
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
