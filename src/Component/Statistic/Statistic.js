import axios from 'axios';
import React, { useState } from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';




const Statistic = () => {


    const [stats, setStats] = useState([]);

    axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => setStats(data.data.data))
    return (
        <div>
            <p className='font-extrabold text-2xl p-7 text-green-700'> WEB Developmet Questions</p>

            <div className='flex justify-center items-center py-10'>

                <LineChart width={700} height={500} data={stats}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>


                </LineChart>

            </div>
        </div>
    );
};

export default Statistic;