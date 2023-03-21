import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import { Box } from "@mui/material";

import globalObj from "./index";

function Parent() {
  const initialColor = globalObj.getPropertyByName("color");

  const [color, setColor] = useState(initialColor);

  const handleChange = (e) => {
    globalObj.setPropertyValue("color", e.target.value);
    setColor(e.target.value);
  };

  return (
    <div>
      <Box
        sx={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          border: "1px solid",
          backgroundColor: "black",
          color: "white",
          width: "80%",
          margin: "5% auto",
          padding: "6%",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>{globalObj.getPropertyByName("color")}</h1>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ChildA color={color} handleChange={handleChange} />
          <ChildB color={color} handleChange={handleChange} />
        </Box>
      </Box>
    </div>
  );
}

export default Parent;
