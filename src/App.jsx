import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [click, setClick] = useState(false);
  const [score, setScore] = useState(0);
  console.log(score);
  return (
    <>
      {!click ? (
        <Card onClickFunction={setClick} setScore={setScore}></Card>
      ) : (
        <h1>no</h1>
      )}
    </>
  );
}

export default App;
