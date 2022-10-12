import React from 'react';
import './Question.css'

const Quistions = ({ option, correctAnswer }) => {

    const buttonSelected = () => {
        console.log(option, correctAnswer);

        if (option === correctAnswer) {
            alert('Your answer is correct!')
        }
        else {
            alert('Your answer is incorrect!')
        }
    }

    return (
        <div >
            <button onClick={() => buttonSelected()} className='options'>{option}</button>
        </div>
    );
};

export default Quistions;