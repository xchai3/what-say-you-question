import React from 'react'
import PropTypes from 'prop-types';
import AnswerOption from '../components/AnswerOption';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Description from "./Description";

function Quiz(props) {

    const ToContinue=(e)=>{
        e.preventDefault();
        props.nextStep();
    };
    //generate every option
    const renderAnswerOptions=(key)=> {
         //key 是每个选项
        const temp=props.answerOptions;
        return (
            <AnswerOption
                key={key}
                id={temp.indexOf(key)}
                answerContent={key}
                answerType={key}
                title={props.question}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Sports: What say you?"/>
                {/*<QuestionCount counter={props.questionId} total={props.questionTotal} />*/}
                <Description content={props.question} />
                <ul className="answerOptions">
                    {props.answerOptions.map(renderAnswerOptions)}
                </ul>
                <div className="ContinueButton">
                    <RaisedButton
                        label="Continue"
                        id="nStep"
                        primary={true}
                        onClick={ToContinue}
                        disabled={!props.choose}
                    />
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    );
}

export default Quiz;
