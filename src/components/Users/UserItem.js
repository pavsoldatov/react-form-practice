import styles from "./UserItem.module.css";

const UserItem = (props) => {
  const id = Math.random().toString();

  const clickHandler = (e) => {
    const id = e.target.closest("span").id;
    props.onGetUserID(id)
  };

  return (
    <span
      className={styles.userItem}
      id={props.id}
      onClick={clickHandler}
    >
      <div className={styles.userName}>{props.name}</div>
      <div className={styles.userAge}>{`${props.age} ${
        props.age === "1" ? "year" : "years"
      }`}</div>
    </span>
  );
};

export default UserItem;
