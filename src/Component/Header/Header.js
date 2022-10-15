import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar flex justify-between mb-2  shadow-xl p-5  '>
            <div className='ml-10'>
                <p className='text-3xl font-bold border p-2 rounded-md  text-indigo-600'>DevQuiz...</p>
            </div>
            <div className='mr-10 mt-3'>
                <NavLink className='font-bold text-xl ml-5 text-indigo-600 hover:bg-violet-100  p-3 rounded-md' to={'/'}>TOPIC</NavLink>
                <Link className='font-bold text-xl ml-5 text-indigo-600 hover:bg-violet-100  p-3 rounded-md' to={'/statestic'}>STATISTIC</Link>
                <Link className='font-bold text-xl ml-5 text-indigo-600 hover:bg-violet-100  p-3 rounded-md' to={'/blog'}>BLOG</Link>
            </div>


        </nav>


    );
};

export default Header;