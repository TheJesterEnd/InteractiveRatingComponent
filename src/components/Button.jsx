import "./button.css";
function Button(props) {
  return (
    <button
      className="button"
      onClick={() => props.setScore(props.number)}
      style={
        props.score === props.number
          ? { backgroundColor: "#7C8798", color: "white" }
          : {}
      }
    >
      {props.number}
    </button>
  );
}

export default Button;
