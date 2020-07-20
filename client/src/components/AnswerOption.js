import React, {useState} from 'react';

function AnswerOption(props) {
    return (
        <div>
            <li className="answerOption">
                <input
                    type="radio"
                    className="radioCustomButton"
                    name="radioGroup"
                    id={props.id}
                    value={props.answerContent}
                    title={props.title}
                    onChange={props.onAnswerSelected}
                />
                <label className="radioCustomLabel" htmlFor={props.id}>
                    {props.answerContent}
                </label>
            </li>
        </div>
    );
}

export default AnswerOption;
