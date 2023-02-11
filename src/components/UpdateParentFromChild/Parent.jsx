import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const[message , setMessage] = useState("Rendering Parent") 

    const handleClick = () =>{
        setMessage("Parent Component Changed");
    }
  return (
    <div>
        <h1> Parent</h1>
        <h2> { message } </h2>
        <Child handleClick={ handleClick }/>
    </div>
  )
}

export default Parent