import React from "react";
import styles from "./App.module.css";
import InputForm from "./components/UI/InputForm";
import UserList from "./components/Users/UserList";
import { useState, useCallback, useRef } from "react";

function App() {
  const [users, setUser] = useState([]);

  const inputsHandler = (userData) => {
    console.log(userData);
    setUser((prevState) => {
      return [userData, ...prevState];
    });
  };

  const input = useRef(null);
  const handleInputFocus = () => {
    input.current.focus();
  };

  return (
    <div className={styles.app}>
      <InputForm
        onAddNewUser={inputsHandler}
        inputRef={input}
      />
      <UserList users={users} onAutofocusClick={handleInputFocus} />
    </div>
  );
}

export default App;
