import {useEffect, useState} from "react";

/**
 * The main component representing the whole React application.
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  const [counter, setCounter] = useState(0);

  useEffect(incrementCounter, []); // Increment the counter, only once

  return <p>Counter: {counter}</p>;
  
  function incrementCounter() {
    setCounter(counter + 1);
  }
}

export default App;
