import React from "react";
import styles from "./App.module.css";
import InputForm from "./components/UI/InputForm";
import UserList from "./components/Users/UserList";
import { useState } from "react";

function App() {
  const [users, setUser] = useState([
    { name: "Pav", age: "30", id: Math.random().toString() },
  ]);

  const inputsHandler = (userData) => {
    console.log(userData);
    setUser((prevState) => {
      return [userData, ...prevState];
    });
  };
  console.log(users);
  return (
    <div className={styles.app}>
      <InputForm onAddNewUser={inputsHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
