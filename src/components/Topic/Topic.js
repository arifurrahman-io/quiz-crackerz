import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <div>
                <h2>Course Title: {name}</h2>
                <p>Number of Questions: {total}</p>
                <button className='button'>Start Quiz</button>
            </div>
        </div>
    );
};

export default Topic;