import React from 'react'

const EventBubbling = () => {

   
    function an(){
        console.log(isNaN(true));
        let a=  10;
        console.log(a);
    }
  return (
    <div>
        <button onClick={an}></button>

        <div onClick={() => { alert("outer click")}}>
            <div onClick={() => { alert("inner click")}}>
                <button onClick={() => { alert("button click")}}>click me</button>
            </div>
        </div>
      
    </div>
  )
}

export default EventBubbling
