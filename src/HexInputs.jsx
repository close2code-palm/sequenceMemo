import {Component} from "react";
// import app from "./App";


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
            <input type='text' value={this.state.value}
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
        // this.props.updateLevel(this.props.curLevel)
        let levelDelta = NaN
        switch (this.state.numberFilled - this.state.rightAnswers){
            case 0:
                levelDelta = 1
                break
            case 1:
            case 2:
                levelDelta = 0
                this.props.onFilled()
                break
            default:
                levelDelta = -1
        }
        this.props.updateLevel(this.props.curLevel + levelDelta)
        this.props.unMount(levelDelta)
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
        return <div className="inputs-wrapper input-group-lg">
            <p style={{display: 'flex', justifyContent: 'flex-end', fontSize: '1rem', fontStyle: 'italic',
            paddingRight: '1rem'}}>
            * Press Tab to move to the next input</p>
            {this.mapAnswers().map((sym, key) => (
                <HexInputs key={key} answer={sym} onFilled = {this.oneEntered} />
            ))}

        </div>
    }
}

export default AnswerForm;
