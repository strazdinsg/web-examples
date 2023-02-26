import { Component } from "react";
import "./Square.css";

/**
 * Ac component representing one square on the "game" board
 */
export class Square extends Component {
  constructor(props) {
    // Call parent constructor
    super(props);
    // Set up the state for this component
    this.state = {
      value: this.props.value,
    };
    // Need to do this, because by default "this" will NOT refer to this component...
    this.click = this.click.bind(this);
  }

  /**
   * This method returns the UI element(s) to be rendered for this component
   * Here we will render a button which will call this.click() on every click.
   * The button's text will be the "value" stored in the state
   * @returns {JSX.Element}
   */
  render() {
    return (
      <button className="board-square" onClick={this.click}>
        {this.state.value}
      </button>
    );
  }

  /**
   * This method is called every time the button is clicked. It increases the value in the state.
   */
  click() {
    this.setState({ value: this.state.value + 1 });
  }
}
