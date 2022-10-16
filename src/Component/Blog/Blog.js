import React from 'react';

const Blog = () => {
    return (
        <div>

            <div className="">
                <p className='bg-gray-400 p-3 font-semibold m-5'>What is purpose of react router?</p>
                <p className='m-1'>React Router is a standard library for routing in React. </p>
                <p className='m-1'>It enables the navigation among views of various components in a React Application,</p>
                <p className='m-1'> allows changing the browser URL, and keeps the UI in sync with the URL.!</p>
            </div>
            <div >
                <p className='bg-gray-400 w- p-3 font-semibold m-5' >How does context API work?</p>
                <p className='m-1'> React.createContext() is all you need.</p>
                <p className='m-1'> It returns a consumer and a provider.</p>
                <p className='m-1'>Provider is a component that as it's names suggests provides the state to its children.</p>
                <p className='m-1'>It will hold the "store" and be the parent of all the components that might need that store.</p>
                <p className='m-1'>Consumer as it so happens is a component that consumes and uses the state.</p>
                <p className='m-1'> More information can be found on React's documentation page</p>
            </div>
            <div >
                <p className="bg-gray-400 p-3 font-semibold m-5 ">What is the usage of useHref hook?</p>
                <p className='m-1 mb-7'>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. </p>

            </div>
        </div>

    );
};

export default Blog;