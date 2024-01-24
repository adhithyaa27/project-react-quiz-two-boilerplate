import React, {Component} from "react";
import './Quiz.css'

class Quiz extends Component{
    constructor(props){
        super(props)
        this.questions = props.questions
        this.state = {
            qno: 0
        }
    }
    next = () => {
        const qno = this.state.qno + 1
        if (qno < 15) {
            this.setState(
                {qno: qno}
            )
        }
    }
    previous = () => {
        const qno = this.state.qno - 1
        if (qno >= 0 ){
            this.setState({qno: qno})
        }
    }
    quit = () => {
        prompt('Are you sure you want to quit')

    }
    render(){
        const questions = this.questions
        const qno = this.state.qno
        return(
            <div className="quiz">
                <div id="Question">Question</div>

                <p id="Qnum">{qno + 1} of 15</p>

                <h2 id="questions">{questions[qno].question}</h2>

                <div id="Options">
                    <button>{questions[qno].optionA}</button>

                    <button>{questions[qno].optionB}</button>
                    
                    <button>{questions[qno].optionC}</button>
                    
                    <button>{questions[qno].optionD}</button>
                </div>
                
                <div id ='navbar'>
                    <button id='prevBtn' onClick={this.previous}>Previous</button>
                    
                    <button id='nextBtn' onClick={this.next}>Next</button>
                    
                    <button id='quitBtn' onClick={this.quit}>Quit</button>
                </div>
            </div>
        )
    }
}
export default Quiz


