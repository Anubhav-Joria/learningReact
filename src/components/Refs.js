import React, { Component } from 'react'

export default class Refs extends Component {

    constructor(props) {
      super(props)

      this.inputRef = React.createRef(); //Declaring Refs
      this.state = {
         inputMessage : ""
      }
    this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        console.log(this.inputRef.current.focus()); // Method to focus
    }

    handleClick = () =>{
        alert(this.inputRef.current.value); // For getting valur
    }
     
  render() {
    return (
      <div>
        <input  type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}> Click me</button>
      </div>
    )
  }
}
