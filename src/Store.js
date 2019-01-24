import { observable, computed, action } from "mobx";
import { fromPromise } from "mobx-utils";
import { Figlet } from "./figlet-js/figlet";
// var Figlet = require("./figlet-node").Figlet;

// var figlet = require("figlet");
class Store {
  @observable inputText = "write something";
  @observable outputText;

  @action
  setText(inputText) {
    this.inputText = inputText;
    console.log(inputText);

    // const figOpts = {
    //   font: "Speed",
    //   horizontalLayout: "default",
    //   verticalLayout: "default",
    //   printDirection: 1,
    //   showHardBlanks: false,
    //   height: 1,
    //   baseline: 1,
    //   maxLength: 200,
    //   oldLayout: 0,
    //   numCommentLines: 1
    // };
    var figlet = new Figlet();
    figlet.write(
      inputText,
      "speed",
      function(str) {
        // console.log("asdsadsa");
        // console.log(str);
      }

      // figlet.generateText(
      //   "Speedy",
      //   {
      //     font: "Ghost",
      //     horizontalLayout: "default",
      //     verticalLayout: "default"
      //   },
      //   "Hello World!!"

      // function(err, data) {
      //   if (err) {
      //     console.log("Something went wrong...");
      //     console.dir(err);
      //     return;
      //   }
      //   console.log("Data...");

      //   console.log(data);
      // }
    );

    // figlet.text(
    //   "avs",
    //   {
    //     // font: "Ghost",
    //     horizontalLayout: "default",
    //     verticalLayout: "default"
    //   },
    //   function(error, result) {
    //     console.log(error);
    //     console.log(result);
    //     // this.outputText = result;
    //   }
    // );
  }

  //   @computed get outputText() {
  //     const outputText = this.inputText;
  //     return fromPromise(
  //       // (async () => {
  //       figlet(outputText, function(error, result) {
  //         return result;
  //       })
  //       // })()
  //     );
  //     // return outputText;
  //   }
}

// decorate(Store, {
//   inputText: observable,
//   setText: action
//   //   elapsedTime: computed,
//   //   tick: action
// });

export default Store;
