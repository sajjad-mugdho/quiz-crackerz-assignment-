import React from 'react';

const Hero = () => {
    return (
        <div className='flex justify-between bg-[#6493D9]'>
            <div className='ml-[180px]  mt-[120px]'>
                <p className='text-3xl mt-2 text-left text-white font-bold'>Test Your </p>
                <p className='text-4xl mt-2 text-left text-white font-bold'>Web Development </p>
                <p className='text-3xl mt-2 text-left font-bold text-white'>Knowledge With <span className='text-indigo-900'>DevQuiz</span></p>

            </div>
            <div className='hero-img'>
                <img src="./hero.jpg" alt="" />
            </div>
        </div>
    );
};

export default Hero;