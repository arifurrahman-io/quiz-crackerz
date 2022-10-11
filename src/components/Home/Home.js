import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {

    const topics = useLoaderData();


    return (
        <div >
            <div className='hero'>
                <h2>Welcome to Tech Quiz</h2>
            </div>
            <h2 className='topic-heading'>Popular Quizes</h2>
            <div className='topic-card'>

                {
                    topics.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>

        </div >
    );
};

export default Home;