import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";
import Grid from "@material-ui/core/Grid";
import { Figlet } from "./figlet-js/figlet";

class App extends Component {
  render() {
    var figlet = new Figlet();
    let styles = {
      paddingTop: "30px"
    };

    var outputList = Object.keys(figlet.fonts).map(function(font) {
      return <TextOutput font={font} />;
    });

    return (
      <div className="App" style={styles}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextInput />
          </Grid>
          <Grid item xs={12}>
            {outputList}
            {/* <TextOutput font="speed" />
            <TextOutput font="wavy" /> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
