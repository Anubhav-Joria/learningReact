let instance = undefined;
let globalState = {
  color: "white",
};

class SingleTon {
  constructor() {
    if (instance) {
      throw new Error("error");
    }
    instance = this;
  }
  getPropertyByName(propertyName) {
    return globalState[propertyName];
  }

  setPropertyValue(propertyName, propertyValue) {
    globalState[propertyName] = propertyValue;
  }
}

let globalObj = Object.freeze(new SingleTon());
export default globalObj;
