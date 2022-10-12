import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsView from '../StatisticsView/StatisticsView';


const Statistics = () => {

    const myTopics = useLoaderData();

    return (
        <div>
            {
                myTopics.data.map(myTopic => <StatisticsView
                    key={myTopic.id}
                    myTopic={myTopic}
                ></StatisticsView>)
            }

        </div>
    );
};

export default Statistics;