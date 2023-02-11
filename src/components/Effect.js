import React, { useState, useEffect } from "react";
function Effect() {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(true);
  const [fetchData, setFetchData] = useState([]);

//   useEffect(() => {
//     console.log(name);
//     return () => {
//       console.log("Component Unmounted");
//     };
//   },[]);

  const handleClick = () => {
    setName((p) => p + "a");
  };

  const handleFetchData = async() =>{
    const data = await fetch('https://reqres.in/api/users?page=2');
    const parseData = await data.json();
    console.log(parseData.data)
    setFetchData(parseData.data)

  }
  
  return (
    <div>
      {/* Effect
      {display && <div>Hello {name}</div>}
      <button onClick={handleClick}>click</button>
      <button onClick={() =>{setDisplay(!display)}}> Toggle </button> */}

      <button onClick={handleFetchData}> Click me</button>
      {
        fetchData.map((e)=>{
            return (
                <div>
                    <img src={e.avatar} alt="" />
                    <h5>{e.first_name}</h5>
                </div>
            )
        })
      }
    </div>
  );
}

export default Effect;
