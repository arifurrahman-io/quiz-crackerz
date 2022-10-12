import React from 'react';
import Quistions from '../Quistions/Quistions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './Quiz.css'


const Quiz = ({ questionData }) => {

    const { question, correctAnswer, options } = questionData;


    const message = () => {
        alert('Correct answer is: ' + correctAnswer)
    }

    return (
        <div className='single-quiz'>

            <div className='flex justify-between align-middle'>
                <p>Question: {question}</p>
                <button className='' onClick={() => message(correctAnswer)}><FontAwesomeIcon icon={faEye} /></button>
            </div>
            <div className='q-options'>
                {
                    options.map(option => <Quistions
                        key={option}
                        option={option}
                        correctAnswer={correctAnswer}
                    ></Quistions>)
                }
            </div>
        </div>
    );
};

export default Quiz;