import React from "react";
import globalObj from "./index";

function ChildB({ color, handleChange }) {
  return (
    <>
      <div>
        <div>
          <input type="color" value={color} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <h1>Child B : {globalObj.getPropertyByName("color")}</h1>
        </div>
      </div>
    </>
  );
}

export default ChildB;
