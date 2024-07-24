import "./Square.css";
import { useState } from "react";

/**
 * Ac component representing one square on the "game" board
 */
export function Square(props) {
  // Declare new state variable and function which handles updates for it
  const [counter, setCounter] = useState(props.value);

  /**
   * This method returns the UI element(s) to be rendered for this component
   * Here we will render a button which will call this.click() on every click.
   * The button's text will be the "value" stored in the state
   * @returns {JSX.Element}
   */
  return (
    <button className="board-square" onClick={increaseCounter}>
      {counter}
    </button>
  );

  /**
   * This method is called every time the button is clicked. It increases the counter in the state.
   */
  function increaseCounter() {
    setCounter(counter + 1);
  }
}
