import {Component} from "react";
import HexView from "./HexView";
import {generateStr} from "./HexGenerator";
import AnswerForm from "./HexInputs";

class HexContainer extends Component {
    // const [actionMode, setActionMode] = useState('')
    constructor(props) {
        super(props);
        this.state ={
            actionMode: ''
        }
        this.answer = generateStr(this.props.curLevel)
        console.log(this.answer)
        // this.flashInput()
    }

    componentDidMount() {
        this.flashInput()
    }

    sameLevel() {
        this.answer = generateStr(this.props.curLevel)
        this.flashInput()
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.flashInput()
    // }

    switchActionMode(mode) {
        this.setState({actionMode: mode})
    }

    flashInput() {
        setTimeout(function () {this.switchActionMode('input')}.bind(this), 1500)
        this.switchActionMode('view')
    }

    // flashInput()
    render() {
        return <div className="container-wrapper">
        {this.state.actionMode === 'view'? <HexView hexStr={this.answer}/>
            : <AnswerForm answer={this.answer} updateLevel={this.props.updateLevel}
            curLevel={this.props.curLevel} onFilled={this.sameLevel.bind(this)}/>}
        {/*<AnswerForm answer={this.answer} updateLevel={this.props.updateLevel}*/}
        {/*            curLevel={this.props.curLevel} />*/}
    </div>
    }


}

export default HexContainer;
