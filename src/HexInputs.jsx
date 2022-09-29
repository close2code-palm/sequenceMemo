import {Component} from "react";


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
        } else {
            checkColor =  'red'
        }
        this.setState({value: event.target.value,
        filled: true, color: checkColor})
    }

    render() {
        return <input type='text' value={this.state.value}
        onChange={this.onChange.bind(this)} readOnly={this.state.filled}
        style={{background: this.state.color}}/>
    }
}

class AnswerFrom extends Component {

    mapAnswers(){
        return this.props.answer.split('')
    }

    render() {
        return <div>
            {this.mapAnswers().map(sym => (
                <HexInputs answer={sym}></HexInputs>
            ))}
        </div>
    }
}

export default AnswerFrom;