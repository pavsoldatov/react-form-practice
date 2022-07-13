import styles from "./UserList.module.css";
import UserItem from "./UserItem";

const UserList = (props) => {
  const users = props.users;
  console.log(users);

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
          />
        ))}
      </fieldset>
    </div>
  );
};

export default UserList;
