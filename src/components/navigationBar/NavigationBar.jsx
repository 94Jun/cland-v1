import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AppsIcon from "@mui/icons-material/Apps";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Nav from "./Nav";
import styles from "./NavigationBar.module.css";

const navList = [
  {
    name : "메인",
    link : "/",
    icon : <AppsIcon/>
  },
  {
    name : '일정 목록',
    link : "/schedule",
    icon : <ListAltIcon/>
  },
  {
    name : "캘린더",
    link : "calendar",
    icon : <CalendarMonthIcon/>
  },
  {
    name : "메모",
    link : "sticker",
    icon : <StickyNote2Icon/>
  },
]

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navList.map((nav)=>{
          return <Nav key={nav.name} nav={nav}/>
        })}
      </ul>
    </nav>
  );
};
export default NavigationBar;
