import styles from "./Button.module.css";
const MainButton = (props) => {
  return (
    <button className={styles.main_button} onClick={props.onClick} type={props.type ? props.type : ""}>
      {props.children}
    </button>
  );
};

export default MainButton;
