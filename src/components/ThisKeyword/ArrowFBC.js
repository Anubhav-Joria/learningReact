import React from "react";

const ArrorFBC = () => {
  // 1.
  var variable = "Global Level Variable";
  let myObject = {
    variable: "Object Level Variable",
    arrowFunction: () => {
      console.log("arrowfunction log", this); // global access giving undefined
    },
    regularFunction: function () {
      console.log("Regular function log", this); //local access
    },
  };
  myObject.arrowFunction();
  myObject.regularFunction();

  // 2. Argument can be accessed by using arguments keyword in func exp
  //  Argument can be accessed by using arguments keyword in arrow function however can use rest prms

  //3 .
  return (
    <div>
      <h1>Arrow fun</h1>
    </div>
  );
};

export default ArrorFBC;
