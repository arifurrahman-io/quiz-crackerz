import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {

    const topics = useLoaderData();


    return (
        <div >
            <div className='hero '>
                <h2 className='font-bold text-rose-500 text-5xl px-5'>Welcome to Tech Quiz</h2>
                <p className='text-amber-500 text-2xl font-semibold px-5'>Hello Learners! Welcome to our website. We are offering you to perticipate to high demanding quizes.</p>
            </div>
            <h2 className='text-center mt-10 font-semibold text-3xl'>Popular Quizes</h2>
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