import React, {useState} from 'react'
var timeout;
function Watch() {
    const [seconds, setSeconds] = useState(0);
    // const[stop , setStop] = useState(true);

    
    const startTimer = () =>{
        timeout = setInterval(() => {
            setSeconds(p => p + 1)
            console.log(seconds)
        }, 0.01); 
    }
    const stopTimer = () =>{
        clearInterval(timeout);
    }
    const resetTimer = () =>{
        clearInterval(timeout);
        setSeconds(0)
    }
  return (
    <div>
      <h1>Time - {seconds}</h1>
      <button onClick = {startTimer}> Start</button>
      <button onClick ={stopTimer}> Stop</button>
      <button onClick={resetTimer} > Reset </button>
    </div>
  )
}

export default Watch
