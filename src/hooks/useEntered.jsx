import { useState } from "react";
const useEntered = (initial) => {
  const [enteredData, setEnteredData] = useState(initial);
  const handler = (e) => {
    setEnteredData(e.target.value);
  };
  return [enteredData, handler];
};

export default useEntered;
