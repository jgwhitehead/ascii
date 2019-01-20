import { observable, computed, action } from "mobx";
import { fromPromise } from "mobx-utils";
import figlet from "figlet";
class Store {
  @observable inputText = "write something";
  @observable outputText;

  @action
  setText(inputText) {
    this.inputText = inputText;
    console.log(inputText);

    figlet("Hello World!!", function(err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    });

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
