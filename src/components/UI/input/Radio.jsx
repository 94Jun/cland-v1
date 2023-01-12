const Radio = (props) => {
  let radio = <input type="radio" name={props.group} value={props.value} onChange={props.onChange} />;
  if (props.default === props.value) radio = <input type="radio" name={props.group} value={props.value} onChange={props.onChange} defaultChecked />;

  return (
    <label>
      {props.value}
      {radio}
    </label>
  );
};

export default Radio;
