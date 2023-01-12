import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import NavigationBar from "../navigationBar/NavigationBar";
import styles from "./Layout.module.css";
const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Header/>
        <NavigationBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
