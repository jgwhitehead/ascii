import { observable, computed, action, decorate } from "mobx";

class Store {
  @observable
  inputText = "write something";

  @action
  setText(inputText) {
    this.inputText = inputText;
  }
}
// decorate(Store, {
//   inputText: observable,
//   setText: action
//   //   elapsedTime: computed,
//   //   tick: action
// });

export default Store;
