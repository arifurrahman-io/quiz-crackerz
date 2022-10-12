import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;

    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <div>
                <h2>Course Title: {name}</h2>
                <p>Number of Questions: {total}</p>
                <button className='myButton my-3'><Link to={`/quizdata/${id}`}> Start Quiz</Link></button>
            </div>
        </div>
    );
};

export default Topic;