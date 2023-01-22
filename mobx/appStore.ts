import { observable, makeObservable, action } from "mobx";

class AppStore {
  showTabBar: boolean = true;

  constructor() {
    makeObservable(this, {
      showTabBar: observable,
      toggleShowTabBar: action,
    });
  }

  toggleShowTabBar() {
    this.showTabBar = !this.showTabBar;
  }
}

export default new AppStore();
