import React, {useState} from 'react'

function ShowHide() {

    const [show, setShow] = useState(true);

    const Comp = ()=>{
        return(
            <div>
            <h1>Hello everyone</h1>
            </div>
        )
    }

  return (
    <div>
        <button onClick={() =>{ setShow(!show)}}> {show ? "hide" : "show"} </button>
        {show ? <Comp/> : ""}
      
    </div>
  )
}

export default ShowHide
