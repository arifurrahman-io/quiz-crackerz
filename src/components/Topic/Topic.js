import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <p>{total}</p>
        </div>
    );
};

export default Topic;