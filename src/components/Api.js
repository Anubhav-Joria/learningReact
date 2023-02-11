import axios from "axios";
import React, { useState,useEffect  } from "react";

function Api() {
  const url = "https://63861016beaa64582671f9f4.mockapi.io/users";

  useEffect(()=>{
    const fetchData = async() =>{
      const data = await fetch(url);
      const parseDate = await data.json();
      console.log(parseDate);
    }

    fetchData();
  },[])

  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [age, setAge] = useState("");

  // GET API
  const getData = async () => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // POST API
  const postData = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        name: name,
        age: age,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setAge("");
    setName("");
  };

  // PUT API : FOR UPDATING
  const updateData = (e, id) => {
    e.preventDefault();
    axios.put(url+`/${id}`, {
        name: name,
        age: age,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setAge("");
    setName("");
  };

  // DELETE API 
  const deleteData = (e, id) => {
    e.preventDefault();
    axios.delete(url+`/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <button onClick={getData}> Get Data </button>
      </div>
      <div>
        <form action="/">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <button onClick={postData}> Post Data </button>
        </form>
      </div>

      {data.map((element, index) => {
        return (
          <div key={index} style={{ margin: "9px" }}>
            <h2>{`${element.id}. ${element.name}, age: ${element.age}`}</h2>
            <div>
              <button onClick={(e) => {updateData(e, element.id)}}> Update</button>
              <button onClick={(e)=>{deleteData(e, element.id)}}> Remove </button>
            </div>
          </div>
        );
      })}

    </div>
  );
}

export default Api;


