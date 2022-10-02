import {Component} from "react";
import HexView from "./HexView";
import {generateStr} from "./HexGenerator";
import AnswerForm from "./HexInputs";

class HexContainer extends Component {
    constructor(props) {
        super(props);
        this.state ={
            actionMode: ''
        }
        this.answer = generateStr(this.props.curLevel)
        console.log(this.answer)
        // this.flashInput()
    }

    handleUnmountIn(numChange){
        this.answer = generateStr(this.props.curLevel + numChange)
        // this.setState({actionMode: 'view'})
        this.flashInput()
    }

    componentDidMount() {
        this.flashInput()
    }

    sameLevel() {
        this.answer = generateStr(this.props.curLevel)
        this.flashInput()
    }

    switchActionMode(mode) {
        this.setState({actionMode: mode})
    }

    flashInput() {
        setTimeout(function () {this.switchActionMode('input')}.bind(this), 1500)
        this.switchActionMode('view')
    }

    // flashInput()
    render() {
        return <div className="container-wrapper text-center">
        {this.state.actionMode === 'view'? <HexView hexStr={this.answer}/>
            : <AnswerForm answer={this.answer} updateLevel={this.props.updateLevel}
                          unMount={this.handleUnmountIn.bind(this)}
            curLevel={this.props.curLevel} onFilled={this.sameLevel.bind(this)}/>}
        </div>
    }
}

export default HexContainer;
