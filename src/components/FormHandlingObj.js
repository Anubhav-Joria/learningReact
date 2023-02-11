import React from 'react'
import { useState } from 'react'

function FormHandlingObj() {

    const [user, setUser] = useState({
        userName: '',
        phoneNumber: '',
        location: '',
        course:''
    });

    const handleFormChange = event => {
      //To add new value to an object using spread operator
        setUser({ ...user, [event.target.name]: event.target.value });
      
    }

    // handleFormChange = (event) => {
    //    setUser({value: event.target.value});
    //   }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        alert(`Welcome ${user.userName} your phone number is ${user.phoneNumber} living in ${user.location} and your course is ${user.course}`);
    };

  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="UserName">UserName</label>
          <input type="text" name="userName" value ={user.userName} onChange={handleFormChange} />
        </div>
        <div>
          <label htmlFor="Phone Number">Phone Number</label>

          <input
            type="number"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="Location">Location</label>

          <input
            type="text"
            name="location"
            value={user.location}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="course">Course</label>

          <input
            type="text"
            name="course"
            value={user.course}
            onChange={handleFormChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default FormHandlingObj
