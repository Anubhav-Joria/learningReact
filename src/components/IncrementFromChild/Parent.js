import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((p) => p + 1);
  };

  return (
    <div>
      <h1>Count - {count} </h1>

      <Child handleClick={handleClick} />
    </div>
  );
}

export default Parent;
