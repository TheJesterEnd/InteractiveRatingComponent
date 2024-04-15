import "./card.css";
import star from "../assets/star.svg";
function Card() {
  return (
    <main>
      <img src={star} alt="icon" />
      <h2 className="title">How did we do?</h2>
      <p className="para">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttons"></div>
      <button>SUBMIT</button>
    </main>
  );
}

export default Card;
