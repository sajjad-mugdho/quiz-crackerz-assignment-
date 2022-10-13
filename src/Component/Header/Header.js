import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar flex justify-between  shadow-md p-5  '>
            <div className='ml-10'>
                <p className='text-3xl font-bold border p-2 rounded-md  text-indigo-600'>DevQuiz...</p>
            </div>
            <div className='mr-10 mt-3'>
                <Link className='font-bold text-xl ml-5 text-indigo-600 ' to={'/'}>TOPIC</Link>
                <Link className='font-bold text-xl ml-5 text-indigo-600' to={'/statestic'}>STATISTIC</Link>
                <Link className='font-bold text-xl ml-5 text-indigo-600' to={'/blog'}>BLOG</Link>
            </div>



        </nav>


    );
};

export default Header;