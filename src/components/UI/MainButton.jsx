import styles from "./MainButton.module.css";
const MainButton = (props) => {
  return <button className={styles.button}>{props.children}</button>;
};

export default MainButton;
