import styles from "./InputForm.module.css";
import { useState } from "react";

const InputForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const changeNameHandler = (e) => setName(e.target.value);
  const changeAgeHandler = (e) => setAge(e.target.value);
  const id = Math.random().toString();

  const [userData, setUser] = useState({});

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Please enter a name");
      return;
    }
    if (age < 1) {
      alert("Please enter a number greater than 0");
      return;
    }

    const newUser = { ...userData, name: name, age: age, id: id };
    setUser(newUser);
    props.onAddNewUser(newUser);

    setUser({});
    setName("");
    setAge("");
  };

  return (
    <form className={styles.auth} onSubmit={formSubmitHandler}>
      <fieldset>
        <legend>New User</legend>
        <label htmlFor="auth-name">Name</label>
        <input
          type="name"
          id="auth-name"
          value={name}
          onChange={changeNameHandler}
        />

        <label htmlFor="auth-age">Age</label>
        <input
          type="number"
          id="auth-age"
          value={age}
          onChange={changeAgeHandler}
        />
        <button type="submit" className={styles.authSubmit}>
          Add
        </button>
      </fieldset>
    </form>
  );
};

export default InputForm;
