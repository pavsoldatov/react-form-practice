import styles from "./AddButton.module.css";

export default function AddButton(props) {
  return (
    <button
      type="submit"
      className={styles.authSubmit}
      onClick={props.onAutofocusClick}
    >
      {props.text}
    </button>
  );
}
