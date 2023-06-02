import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const statistic = [
        {
            "id": 1,
            "name": "Assignment-1",
            "mark": 60
        },
        {
            "id": 2,
            "name": "Assignment-2",
            "mark": 59
        },
        {
            "id": 3,
            "name": "Assignment-3",
            "mark": 60
        },
        {
            "id": 4,
            "name": "Assignment-4",
            "mark": 56
        },
        {
            "id": 5,
            "name": "Assignment-5",
            "mark": 60
        },
        {
            "id": 6,
            "name": "Assignment-6",
            "mark": 60
        },
        {
            "id": 7,
            "name": "Assignment-7",
            "mark": 60
        },
        {
            "id": 8,
            "name": "Assignment-8",
            "mark": 58
        }
    ]
    return (
        <div>
            <div className='relative'>
                <h1 className='absolute hidden xl:block inset-x-0 top-14 text-center text-4xl font-bold'>Statistics</h1>
                <img className='hidden xl:block' src="https://i.ibb.co/tJ3GkJg/Vector.png" alt="" />
                <img className='hidden xl:block absolute -top-20 right-0 z-[-1]' src="https://i.ibb.co/VBHkjZk/Vector-1.png" alt="" />
            </div>
            <hr className='hidden xl:block' />
            <div className='text-center my-32'>
                <h1 className='text-2xl md:text-6xl md:mb-5 font-semibold'>P-Hero Assignment Statistics</h1>
                <ResponsiveContainer width='100%' height={400}>
                    <RadarChart
                        cx="50%"
                        data={statistic}
                    >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis />
                        <Radar dataKey="mark" stroke="#8884d8"
                            fill="#0ffafa"
                            fillOpacity={0.2}></Radar>
                        <Tooltip></Tooltip>
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;