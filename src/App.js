import axios from "axios";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);

  // useEffect(() => {
  //   const getUsers = () => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((data) => setUsers(data))
  //       .catch((err) => console.log(err.response.data));
  //     // .catch(err=>console.log(err.response.data))
  //   };

  //   getUsers();
  // }, []);
  // console.log(users)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (error) {console.log(error)}
    };

    fetchUsers(); 
  }, []);

  return (
    <div className="App">
      {users.length &&
        React.Children.toArray(
          users.map((el) => (
            <div>
              <h1>{el.name}</h1>
              <h3>{el.email}</h3>
              <hr />
            </div>
          ))
        )}
    </div>
  );
}

export default App;
