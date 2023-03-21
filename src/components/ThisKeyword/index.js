import React, { Component } from "react";
import ArrorFBC from "./ArrowFBC";
import ClassBase from "./ClassBase";
import Function from "./Function";

class ThisKeyword extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <ArrorFBC/> */}
        {/* <Function /> */}
        <ClassBase name="Anubhav" age={21} />
      </div>
    );
  }
}

export default ThisKeyword;
