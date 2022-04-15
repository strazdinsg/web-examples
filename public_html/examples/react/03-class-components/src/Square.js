import {Component} from "react";
import "./Square.css"

export class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": this.props.value
        };
        // Need to do this, because by default "this" will NOT refer to this component...
        this.click = this.click.bind(this);
    }

    render() {
        return <button className="board-square" onClick={this.click}>
            {this.state.value}
        </button>;
    }

    click() {
        this.setState({value: this.state.value + 1})
    }
}
