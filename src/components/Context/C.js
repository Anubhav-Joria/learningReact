import React from "react";
import { UserConsumer } from "./CreateContext";
function C() {
  return (
    <UserConsumer>
      {(userName) => {
        return <div>name : {userName}</div>;
      }}
    </UserConsumer>
  );
}

export default C;
