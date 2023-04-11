import React, { useEffect, useState } from "react";

function TestingAPI() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError("Error Occured");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <h1>Testing API response</h1>
        <h2>Users</h2>

        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>

        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default TestingAPI;
