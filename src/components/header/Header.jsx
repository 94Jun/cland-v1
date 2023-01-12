import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";
import MainButton from "../UI/button/MainButton";
import styles from './Header.module.css'
import useToggle from "../../hooks/useToggle";
import ScheduleModal from "../schedule/addSchedule/ScheduleModal";

const Header = () => {
  const [scheduleModalIsShown, toggleScheduleModal] = useToggle(false)
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
        <MainButton onClick={toggleScheduleModal}>+ 일정 추가</MainButton>
      </div>
      {scheduleModalIsShown && <ScheduleModal toggleScheduleModal={toggleScheduleModal}/>}
    </header>
  );
};

export default Header;
