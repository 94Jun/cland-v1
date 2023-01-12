import { useState, useEffect } from "react";
import { getID, getNowDate } from "../../../common";
import CancelButton from "../../UI/button/CancelButton";
import MainButton from "../../UI/button/MainButton";
import styles from "./AddSchedule.module.css";
import useEntered from "../../../hooks/useEntered";
import Radio from "../../UI/input/Radio";

const AddSchedule = (props) => {
  const [title, titleHandler] = useEntered("");
  const [startDate, setStartDate] = useState({ date: getNowDate(), value: new Date(getNowDate()).valueOf() });
  const [endDate, setEndDate] = useState({ date: getNowDate(), value: new Date(getNowDate()).valueOf() });
  const [importance, importanceHandler] = useEntered("중");
  const [content, contentHandler] = useEntered("");
  const startDateHandler = (e) => {
    setStartDate({ date: e.target.value, value: e.target.valueAsNumber });
  };
  const endDateHandler = (e) => {
    setEndDate({ date: e.target.value, value: e.target.valueAsNumber });
  };
  useEffect(() => {
    if (startDate.value > endDate.value) {
      setEndDate(startDate);
    }
  }, [startDate]);
  const submitHandler = (e) => {
    e.preventDefault();
    const addedSchedule = {
      id: getID(),
      title,
      startDate,
      endDate,
      importance,
      content,
    };
    console.log(addedSchedule);
    props.toggleScheduleModal();
  };
  return (
    <div className={styles.modal}>
      <h2 className={styles.title}>일정 추가</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            제목 <input type="text" id="schedule_title" value={title} onChange={(e) => titleHandler(e)} />
          </label>
        </div>
        <div className={styles.date_container}>
          <div>
            <label>
              시작 날짜
              <input type="date" value={startDate.date} onChange={startDateHandler} min={getNowDate()} />
            </label>
          </div>
          <div>
            <label>
              종료 날짜 <input type="date" value={endDate.date} onChange={endDateHandler} min={startDate.date} />
            </label>
          </div>
        </div>
        <div>
          <span>중요도</span>
          {["상", "중", "하"].map((el) => {
            return <Radio key={el} group="importance" value={el} onChange={(e) => importanceHandler(e)} default="중" />;
          })}
        </div>
        <div>
          <p>내용</p>
          <textarea value={content} onChange={(e) => contentHandler(e)} />
        </div>
        <div className={styles.btn_wrap}>
          <CancelButton onClick={props.toggleScheduleModal} type="button">
            취소
          </CancelButton>
          <MainButton>등록</MainButton>
        </div>
      </form>
    </div>
  );
};

export default AddSchedule;
