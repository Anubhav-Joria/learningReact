import React, { useState } from "react";

// BY USING SEPERATE STATES
function FormHandling() {
  const [name, setname] = useState("");
  const [phoneNumber, setphoneNumber] = useState();
  const [userData, setUserData] = useState([]);

  const handleFormName = (event) => {
    setname(event.target.value);
  };

  const handleFormPhoneNumber = (event) => {
    setphoneNumber(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const currData = {name : name, phoneNumber : phoneNumber};
    //To add new object in an array using spread operator
    setUserData([...userData, { name: name, phoneNumber: phoneNumber }]);
    
    console.log(userData);
    // alert(`Welcome ${name} your phone number is ${phoneNumber}`);
  };
  return (
    <>
    
      <form action="" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="UserName">UserName</label>
          <input type="text" value={name} onChange={handleFormName} />
        </div>

        <div>
          
          <label htmlFor="Phone Number">Phone Number</label>
          <input
            type="number"
            value={phoneNumber}
            onChange={handleFormPhoneNumber}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {userData.map((currVal) => (
        <div style={{ display: "grid-inline", gap: " 50px 100px" }}>
          <h5
            style={{
              color: "green",
              backgroundColor: "pink",
              display: "inline-block",
            }}
          >
            User Name is {currVal.name} and phone Number is{" "}
            {currVal.phoneNumber}{" "}
          </h5>
        </div>
      ))}
    </>
  );
}

export default FormHandling;
