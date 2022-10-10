import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {

    const topics = useLoaderData();
    console.log(topics.data.length);

    return (
        <div className='topic-card'>
            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }


        </div>
    );
};

export default Home;