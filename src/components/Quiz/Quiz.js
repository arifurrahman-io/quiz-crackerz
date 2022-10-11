import React from 'react';
import Quistions from '../Quistions/Quistions';
import './Quiz.css'

const Quiz = ({ questionData, myQuestions }) => {

    const { question, correctAnswer, options } = questionData;


    return (
        <div className='single-quiz'>
            <p>{question}</p>
            <div className='q-options'>
                {
                    options.map(option => <Quistions
                        key={option}
                        option={option}
                    ></Quistions>)
                }
            </div>
            <p>{correctAnswer}</p>
        </div>
    );
};

export default Quiz;