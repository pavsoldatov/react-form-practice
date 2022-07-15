import styles from "./UserItem.module.css";

const UserItem = (props) => {
  const getId = (e) => {
    const id = e.target.closest("span").id;
    props.onGetUserID(id);
  };

  return (
    <span className={styles.userItem} id={props.id} onClick={getId}>
      <div className={styles.userName}>{props.name}</div>
      <div className={styles.userAge}>{`${props.age} ${
        props.age === "1" ? "year" : "years"
      }`}</div>
    </span>
  );
};

export default UserItem;
