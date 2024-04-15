import "./button.css";
function Button(props) {
  return (
    <button className="button" onClick={() => props.setScore(props.number)}>
      {props.number}
    </button>
  );
}

export default Button;
