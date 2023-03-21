import React, { Component } from "react";

export default class ClassBase extends Component {
  constructor(props) {
    super(props);

    console.log("this", this);
    console.log("this.props constructor", this.props); // have to use super(props), otherwise this.props will be undefined
  }

  render() {
    return (
      <div>
        <h1>Class Base {this.props.name}</h1>
      </div>
    );
  }
}
