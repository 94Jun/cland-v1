import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";
import MainButton from "../UI/MainButton";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.title}>
          <span className={styles.icon}>
            <CalendarTodayIcon />
          </span>
          <h1>Cland.</h1>
        </div>
      </Link>
      <div className={styles.btn_wrap}>
        <MainButton>+ 일정 추가</MainButton>
      </div>
    </header>
  );
};

export default Header;
