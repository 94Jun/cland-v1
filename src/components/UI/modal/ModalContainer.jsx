import { createPortal } from "react-dom";
const ModalContainer = (props) => {
  return createPortal(<>{props.children}</>, document.getElementById('modal-root'));
}
 
export default ModalContainer;