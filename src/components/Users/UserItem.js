import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <span className={styles.userItem}>
      <div className={styles.userName}>{props.name}</div>
      <div className={styles.userAge}>{`${props.age} ${
        props.age === "1" ? "year" : "years"
      }`}</div>
    </span>
  );
};

export default UserItem;
