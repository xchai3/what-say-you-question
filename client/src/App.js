import React, {Component} from 'react';
import './App.css';
import Quiz from "./components/Quiz";
class App extends Component {
    state={
        counter: 0,
        questionId: 1,
        questions:[],
        question:"",
        answerOptions: [],
        num:0,
        final :[],
        choose: false};
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
    /*** What is this ***/
    handleAnswerSelected=(event)=> {
        console.log("event",event.currentTarget);
        this.setUserAnswer(event.currentTarget.value);
        this.setState({
            choose:true
        })
    }
    nextStep=()=>{
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
        const len=this.state.final.length;
        if(len=== this.state.counter) {
            this.setState({
                    final: [...this.state.final, param]
                }
            );
        }
        else
        {
            const array=[...this.state.final];
            array.splice(this.state.counter,1);
            console.log("test",array);
            this.setState({
                    final: [...array,param]
                }
            );
        }
    }

    setNextQuestion=()=> {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            //设置问题和选项
            counter: counter,
            questionId: questionId,
            question: this.state.questions[counter].description,
            answerOptions: this.state.questions[counter].answers,
            choose:false
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
                    {this.state.questionId>this.state.num ? <h2>end</h2> :this.renderQuiz()}
                </div>
            </div>
        );
    }
}

export default App;
