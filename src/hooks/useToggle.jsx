import { useState } from "react";
const useToggle = (boolean) => {
  const [toggle, setToggle] = useState(boolean);
  const convert = () => {
    setToggle((prev) => !prev);
  };
  return [toggle, convert];
};

export default useToggle;
