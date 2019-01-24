import { observable, computed, action } from "mobx";
import { fromPromise } from "mobx-utils";
import { Figlet } from "./figlet-js/figlet";
// var Figlet = require("./figlet-node").Figlet;

// var figlet = require("figlet");
class Store {
  @observable inputText = "write something";
  @observable outputText;

  @action
  setOutputText(outputText) {
    this.outputText = outputText;
    console.log(outputText);
  }

  @action
  setText(inputText) {
    this.inputText = inputText;
    var figlet = new Figlet();
    figlet.write(inputText, "speed", str => {
      this.setOutputText(str);
    });
  }
}

export default Store;
