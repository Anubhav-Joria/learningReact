import React from "react";
import globalObj from "./index";

function ChildA({ color, handleChange }) {
  return (
    <>
      <div>
        <div>
          <input type="color" value={color} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <h1>Child A : {globalObj.getPropertyByName("color")}</h1>
        </div>
      </div>
    </>
  );
}

export default ChildA;
