import {Component} from "react";
import HexContainer from "./HexContainer";


class InputLevel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 4
        }
    }

    setLevel(level_num) {
        this.setState({level: level_num})
    }

    render() {
        return (
            <div className="app-container text-center">
                <p>You current level is {this.state.level}</p>
                <HexContainer updateLevel = {this.setLevel.bind(this)} curLevel = {this.state.level} />
            </div>
        )
    }
}

export default InputLevel;
