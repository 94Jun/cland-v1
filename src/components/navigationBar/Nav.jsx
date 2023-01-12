import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";
const Nav = (props) => {
  const { link, icon, name } = props.nav;
  return (
    <NavLink to={link}>
      <li className={styles.item}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.name}>{name}</span>
      </li>
    </NavLink>
  );
};

export default Nav;
