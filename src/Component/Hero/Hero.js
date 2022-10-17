import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='flex justify-between '>
            <div className='ml-[180px] my-10 mt-[120px]'>
                <p className='text-4xl mt-2  text-white font-bold'>Test Your </p>
                <p className='text-5xl mt-2  text-white font-bold'>Web Development </p>
                <p className='text-4xl mt-2  font-bold text-white'>Knowledge With <span className='text-red-600'>DevQuiz</span></p>

            </div>

        </div>
    );
};

export default Hero;