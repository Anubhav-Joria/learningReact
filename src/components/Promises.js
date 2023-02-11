import React from "react";
import { useState } from "react";
function Promises() {
  const [res, setRes] = useState([]);

  // /* Fetching data using promises

  const fetchData = () => {
    //Promise Production :- and fetching data and setting to resolve and reject
    const promiseObj = new Promise((resolve, reject) => {
      const data = fetch("https://reqres.in/api/users?page=2");
      resolve(data);
      reject("Unable to fetch data");
    });

    //Creating parseData function for converting the data to json format
    // const parseData = (data) =>{
    //   return new Promise( (resolve, reject) =>{
    //     const parsedata = data.json();
    //     resolve(parsedata);
    //     reject("unable to convert the data to json format")
    //   });
    // }

    // Promise Consumption
    promiseObj
      .then((data) => {
        console.log(data);
        return new Promise((resolve, reject) => {
          const parsedata = data.json();
          resolve(parsedata);
          reject("unable to convert the data to json format");
        });
      })
      .then((jsonData) => {
        setRes(jsonData.data); // Setting the data to the state for rendering
        console.log(jsonData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // */
  // USING ASYNC AWAIT
  //  const fetchData = async () => {
  //     try{
  //         let url = 'https://reqres.in/api/users?page=2'
  //         let response = await fetch(url);
  //         let parseData = await response.json();
  //         console.log(parseData.data)
  //         setRes(parseData.data);
  //      }
  //     catch(error){
  //         console.log(error);
  //     }
  //   };

  return (
    <>
      <h3>promises</h3>
      <button onClick={fetchData}> Fetch Data </button>
      {res.map((val) => {
        return (
          <div key={val.id}>
            <h1>{`email: ${val.email} name :${val.first_name} ${val.last_name}`}</h1>
            <img src={val.avatar} alt="" />
          </div>
        );
      })}
    </>
  );
}
export default Promises;
//A promise is an object that keeps track of our work whether it is completed or not
// they are used to handle asynchronous operations in javascript.
