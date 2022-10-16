import React from 'react';
import { Link } from 'react-router-dom';


const QuizSection = ({ quiz }) => {

    const { id, name, logo, total } = quiz;


    return (
        <div className='mt-5 py-10 '>
            <div className='overflow-hidden rounded-md shadow-lg max-w-sm'>
                <img className='p-4 border' src={logo} alt="img" />
                <div className='px-6 py-4'>

                    <h1 className='text-xl font-bold mb-2 text-left'><span className='text-orange-700'>Test Topic:</span> {name}</h1>
                    <h1 className='text-sm text-left mb-2'>Total Qus: {total}</h1>

                    <button className='btn py-3 px-6 text-pink-50 font-bold rounded-lg bg-indigo-700'><Link to={`topic/${id}`}>Let Start</Link></button>

                </div>



            </div>




        </div>
    );
};

export default QuizSection;