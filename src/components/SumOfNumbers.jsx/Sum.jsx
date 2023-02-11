import React, { useState } from "react";

function Sum() {

  const [first, setfirst] = useState();
  const [second, setsecond] = useState();
  const [third, setthird] = useState();
  const [sum, setSum] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();

    const num = parseInt(first) + parseInt(second) +  parseInt(third);
    setSum(num);
    setfirst(0);
    setsecond(0);
    setthird(0);

  }
  return (
    <div>
      <form action="/" onSubmit={handleSubmit}>
        <div>
          <input type="number" value={first} onChange={(e) => {setfirst(e.target.value)
            }}
          />
          <input type="number" value={second} onChange={(e) => {setsecond(e.target.value)
            }}
          />
          <input type="number" value={third} onChange={(e) => {setthird(e.target.value)
            }}
          />
        </div>
        <div>
            <button type="submit" > Add Numbers </button>
        </div>
        <h1>Sum - {sum} </h1>
      </form>
    </div>
  );
}

export default Sum;
