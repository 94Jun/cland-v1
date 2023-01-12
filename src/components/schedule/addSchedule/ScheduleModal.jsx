import BackDrop from "../../UI/modal/BackDrop";
import ModalContainer from "../../UI/modal/ModalContainer";
import AddSchedule from "./AddSchedule";
import styles from "./AddSchedule.module.css";

const ScheduleModal = (props) => {
  return (
    <ModalContainer>
      <BackDrop onClick={props.toggleScheduleModal} />
      <AddSchedule toggleScheduleModal={props.toggleScheduleModal}/>
    </ModalContainer>
  );
};

export default ScheduleModal;
