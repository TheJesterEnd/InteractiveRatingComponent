import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Thank from "./components/Thank";
function App() {
  const [click, setClick] = useState(false);
  const [score, setScore] = useState(0);
  console.log(score);
  return (
    <>
      {!click ? (
        <Card
          onClickFunction={setClick}
          setScore={setScore}
          score={score}
        ></Card>
      ) : (
        <Thank score={score}></Thank>
      )}
    </>
  );
}

export default App;
