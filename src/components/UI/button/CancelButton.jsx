import styles from "./Button.module.css";
const CancelButton = (props) => {
  return (
    <button className={styles.cancle_button} onClick={props.onClick} type={props.type ? props.type : ""}>
      {props.children}
    </button>
  );
};

export default CancelButton;
