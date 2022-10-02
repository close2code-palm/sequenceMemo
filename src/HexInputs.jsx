import {Component} from "react";
import app from "./App";


// needs to know answer from renderer

class HexInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            color: 'blue',
            filled: false
        }
    }

    onChange(event){
        let checkColor;
        if (this.props.answer === event.target.value) {
            checkColor = 'green'
            this.props.onFilled(true)
        } else {
            checkColor =  'red'
            this.props.onFilled(false)
        }
        this.setState({value: event.target.value,
        filled: true, color: checkColor})
    }

    render() {
        return (
            <input key={this.props.rKey}
                   type='text' value={this.state.value}
            onChange={this.onChange.bind(this)} readOnly={this.state.filled}
            style={{background: this.state.color}}/>
        )
    }
}

class AnswerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberFilled: 0,
            rightAnswers: 0,
        }
    }

    handleFullAnswer() {

        // let appBranch = document.querySelector('.app-container')
        // appBranch.parentNode.removeChild(appBranch)
        this.props.updateLevel(this.props.curLevel)
        // switch (this.state.numberFilled - this.state.rightAnswers){
        //     case 0:
        //         this.props.updateLevel(this.props.curLevel + 1)
        //         break
        //     case 1:
        //     case 2:
        //         this.props.onFilled()
        //         break
        //     default:
        //         this.props.updateLevel(this.props.curLevel - 1)
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.numberFilled + ' entered')
        this.checkFull()
    }

    mapAnswers(){
        return this.props.answer.split('')
    }

    oneEntered = isRight => {
        // console.log(this.state.numberFilled + " were entered")
        if (isRight) {
            this.setState({rightAnswers: this.state.rightAnswers + 1})
        }
        this.setState({numberFilled: this.state.numberFilled + 1})
        console.log("Answer has " + this.props.answer.length)
        // console.log(this.state.numberFilled + " entered")
    }

    checkFull() {
        if (this.state.numberFilled === this.props.answer.length) {
            console.log('Filled')
            this.handleFullAnswer()
        }
    }

    render() {
        return <div className="inputs-wrapper">
            {this.mapAnswers().map((sym, index) => (
                <HexInputs rKey={index} answer={sym} onFilled = {this.oneEntered} />
            ))}
        </div>
    }
}

export default AnswerForm;
