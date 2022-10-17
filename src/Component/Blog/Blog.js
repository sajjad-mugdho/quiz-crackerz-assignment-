import React from 'react';

const Blog = () => {
    return (
        <div>

            <div className="">
                <p className='bg-gray-400 p-3 text-2xl font-semibold m-5'>What is purpose of react router?</p>
                <li className='m-1 text-lg text-white'>React Router is a standard library for routing in React. </li>
                <li className='m-1 text-lg text-white'>It enables the navigation among views of various components in a React Application,</li>
                <li className='m-1 text-lg text-white'> allows changing the browser URL, and keeps the UI in sync with the URL.!</li>
            </div>
            <div >
                <p className='bg-gray-400 text-2xl p-3 font-semibold m-5' >How does context API work?</p>
                <li className='m-1 text-lg text-white'> React.createContext() is all you need.</li>
                <li className='m-1 text-lg text-white'> It returns a consumer and a provider.</li>
                <li className='m-1 text-lg text-white'>Provider is a component that as it's names suggests provides the state to its children.</li>
                <li className='m-1 text-lg text-white'>It will hold the "store" and be the parent of all the components that might need that store.</li>
                <li className='m-1 text-lg text-white'>Consumer as it so happens is a component that consumes and uses the state.</li>
                <li className='m-1 text-lg text-white'> More information can be found on React's documentation page</li>
            </div>
            <div >
                <p className="bg-gray-400 text-2xl p-3 font-semibold m-5 ">What is the usage of useHref hook?</p>
                <li className='m-1 text-lg text-white mb-7'>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. </li>

            </div>
        </div>

    );
};

export default Blog;