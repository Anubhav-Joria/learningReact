import React, { useContext } from "react";
function Child(props) {
  // const Consumer = useContext(CountContext.Consumer)
  return (
    <div>
      <button onClick={props.handleClick}> Increment</button>
    </div>
  );
}

export default Child;
