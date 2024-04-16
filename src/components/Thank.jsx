import "./thank.css";
import payment from "../assets/payment.png";
function Thank(props) {
  return (
    <div id="container">
      <img src={payment} alt="payment-icon" />
      <div className="message">
        <p>You selected {props.score} out of 5</p>
      </div>
      <h3 className="title thank">Thank you!</h3>
      <p className="para thank" id="thank-para">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Thank;
