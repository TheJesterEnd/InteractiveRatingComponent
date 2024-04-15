import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [click, setClick] = useState(0);

  return <Card></Card>;
}

export default App;
