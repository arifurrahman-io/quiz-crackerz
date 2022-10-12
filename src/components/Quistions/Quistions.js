import React from 'react';
import './Question.css'

const Quistions = ({ option, correctAnswer }) => {

    const buttonSelected = () => {
        console.log(option, correctAnswer);

        if (option === correctAnswer) {
            alert('Congratulations! Your answer is correct.')
        }
        else {
            alert('So sad. Your answer is not correct!')
        }
    }

    return (
        <div >
            <button onClick={() => buttonSelected()} className='options'>{option}</button>
        </div>
    );
};

export default Quistions;