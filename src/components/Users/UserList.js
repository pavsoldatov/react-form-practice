import styles from "./UserList.module.css";
import UserItem from "./UserItem";
import AddButton from "../UI/AddButton";

const UserList = (props) => {
  const users = props.users;
  console.log(users);

  if (users.length <= 0) {
    return (
      <div className={styles.nothingFound}>
        <h4>No user found.</h4>
        <AddButton
          text={"Add one?"}
          onAutofocusClick={props.onAutofocusClick}
        />
      </div>
    );
  }

  const getUserID = (id) => props.onDeleteUserByID(id);

  return (
    <div className={styles.userList}>
      <fieldset>
        <legend>Users</legend>
        {users.map((user) => (
          <UserItem
            name={user.name}
            age={user.age}
            id={user.id}
            key={user.id}
            onGetUserID={getUserID}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default UserList;
