import React from 'react';

function AnswerOption(props) {
    return (
        <div>
            <li className="answerOption">
                <input
                    type="radio"
                    className="radioCustomButton"
                    name="radioGroup"
                    id={props.answerContent}
                    value={props.answerContent}
                    onChange={props.onAnswerSelected}
                />
                <label className="radioCustomLabel" htmlFor={props.answerContent}>
                    {props.answerContent}
                </label>
            </li>
        </div>
    );
}

export default AnswerOption;
