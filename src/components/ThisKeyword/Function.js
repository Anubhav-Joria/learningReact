import React from "react";

export default function Function() {
  const obj = {
    name: "varun",
  };

  //1. Simple Invocation
  function simpleInvocation() {
    // console.log("simple innvocation", this);
  }
  simpleInvocation(); // logs global object

  //2. Method Innvocation
  const methodInvocation = {
    method() {
      //   console.log("method invocation", this);
    },
  };
  methodInvocation.method(); // logs methodInvocation object

  //3. Indirect Invocation
  const context = { value1: "A", value2: "B" };
  function indirectInvocation() {
    console.log("method invocation", this);
  }
  indirectInvocation.call(obj); // logs {name: 'varun'}
  indirectInvocation.apply(context); // logs { value1: "A", value2: "B" }

  return (
    <div>
      <h1>Function() component</h1>
    </div>
  );
}
