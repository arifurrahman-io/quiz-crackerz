import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './QuizData.css'

const QuizData = () => {

    const quizData = useLoaderData();
    const myQuestions = quizData.data;
    console.log(quizData);



    return (
        <div className='data-container'>
            <h3>You are going answer from {myQuestions.name}</h3>
            {
                myQuestions.questions.map(questionData => <Quiz
                    key={questionData.id}
                    questionData={questionData}
                    myQuestions={myQuestions}
                ></Quiz>)
            }
        </div>
    );
};

export default QuizData;