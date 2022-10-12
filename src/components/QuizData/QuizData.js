import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './QuizData.css'

const QuizData = () => {

    const quizData = useLoaderData();
    const myQuestions = quizData.data;

    return (
        <div className='mx-5 lg:mx-48 py-10'>
            <h3 className='text-3xl py-10'>You are answering from <span className='text-purple-700 font-bold'>{myQuestions.name}</span> </h3>
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