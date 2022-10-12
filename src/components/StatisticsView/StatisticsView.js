import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const StatisticsView = ({ myTopic }) => {

    const { name, total } = myTopic;

    console.log(name);

    const data = [
        {
            name: `${name}`,
            Questions: `${total}`
        }
    ];

    return (

        <div className='flex justify-center align-middle py-10'>
            <BarChart width={250} height={140} data={data}>
                <Bar dataKey="Questions" fill="#FF69B4" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Tooltip></Tooltip>
            </BarChart>
        </div>

    );
};

export default StatisticsView;