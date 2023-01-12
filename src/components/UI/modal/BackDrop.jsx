import styles from './BackDrop.module.css'
const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
}
 
export default BackDrop;