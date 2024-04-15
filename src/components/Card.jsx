import "./card.css";
import star from "../assets/star.svg";
import Button from "./Button";
function Card(props) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <main>
      <img src={star} alt="icon" />
      <h2 className="title">How did we do?</h2>
      <p className="para">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttons">
        {numbers.map((num) => (
          <Button number={num} setScore={props.setScore}></Button>
        ))}
      </div>
      <button className="submit" onClick={() => props.onClickFunction(true)}>
        SUBMIT
      </button>
    </main>
  );
}

export default Card;
