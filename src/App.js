import React from "react";
import styles from "./App.module.css";
import InputForm from "./components/UI/InputForm";
import UserList from "./components/Users/UserList";
import { useState, useRef } from "react";

function App() {
  const [users, setUser] = useState([]);

  const addNewUserHandler = (userData) => {
    console.log(userData);
    setUser((prevState) => {
      return [userData, ...prevState];
    });
  };
  const deleteUserHandler = (id) => {
    setUser(users.filter((user) => user.id !== id));
  };

  const nameInput = useRef(null);
  const ageInput = useRef(null);
  const handleNameFocus = () => nameInput.current.focus();
  const handleAgeFocus = () => ageInput.current.focus();

  return (
    <div className={styles.app}>
      <InputForm
        onAddNewUser={addNewUserHandler}
        nameInputRef={nameInput}
        ageInputRef={ageInput}
        onNameAutofocus={handleNameFocus}
        onAgeAutofocus={handleAgeFocus}
      />
      <UserList
        users={users}
        onAutofocusClick={handleNameFocus}
        onDeleteUserByID={deleteUserHandler}
      />
    </div>
  );
}

export default App;
