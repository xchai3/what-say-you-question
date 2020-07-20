import React, {Component} from 'react';
import './App.css';
import Quiz from "./components/Quiz";
import End from "./components/End";
class App extends Component {
    state={
        counter: 0,
        questionId: 1,
        questions:[],
        question:"",
        answerOptions: [],
        num:0,
        final :[],
        result:[],
        choose: false
    };
    //retrieve all the questions from database
    componentDidMount() {
        //load all questions
        fetch('/questions').then(res=>res.json())
            .then(questions=>this.setState({
                questions:questions,
                question:questions[0].description,
                answerOptions:questions[0].answers
            },()=>{
                console.log('questions fetch',questions);
                this.setState({num:this.state.questions.length})
            }));
    }
    /*** handle chosen  ***/
    handleAnswerSelected=(event)=> {
        const description=event.currentTarget.title;
        const index=event.currentTarget.id;
        const result={description,index};
        console.log("result",result);
        this.setState({
            choose:true,
            result,
        })
    }
    nextStep=()=>{
        console.log("submit",this.state.result);
        this.setUserAnswer(this.state.result);
        this.setNextQuestion=this.setNextQuestion.bind(this)
        if (this.state.questionId < this.state.num) {

            setTimeout(() => this.setNextQuestion(), 300);
        }
        else {
            // already get to the last question
            const questionId = this.state.questionId + 1;
            this.setState({questionId:questionId})
        }
    }


    setUserAnswer =(param)=> {
        console.log("set");
        console.log(param.description);
        fetch(`/questions/${param.description}`,{
            method:'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(param)
        });
    }

    setNextQuestion=()=> {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: this.state.questions[counter].description,
            answerOptions: this.state.questions[counter].answers,
            choose:false,
        });
    }

    renderQuiz() {
        return (
            <Quiz
                // answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={this.state.num}
                onAnswerSelected={this.handleAnswerSelected}
                nextStep={this.nextStep}
                choose={this.state.choose}
            />
        );
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    {this.state.questionId>this.state.num ? <End/> :this.renderQuiz()}
                </div>
            </div>
        );
    }
}

export default App;
