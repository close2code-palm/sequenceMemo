import {Component, useState} from "react";
import HexContainer from "./HexContainer";
//
// export default function InputLevel() {
//     const [level, setLevel] = useState(4)
//
//     return (
//         <div>
//             <p>You current level is {level}</p>
//             <HexContainer updateLevel = {setLevel} curLevel = {level} />
//         </div>
//     )
// }

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
            <div className="app-container">
                <p>You current level is {this.state.level}</p>
                <HexContainer updateLevel = {this.setLevel.bind(this)} curLevel = {this.state.level} />
            </div>
        )
    }
}

export default InputLevel;
