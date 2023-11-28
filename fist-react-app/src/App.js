import { useState, useEffect } from "react";
import "./App.css";

const Person = props => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h3>Last Name: {props.lastname}</h3>
      <h3>Age: {props.age}</h3>
    </>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(3);
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter(prevCount => prevCount + 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prevCount => prevCount - 1)}>-</button>
      <Person name="Zheno" lastname={"Chen"} age={20} />
    </div>
  );
};

export default App;
