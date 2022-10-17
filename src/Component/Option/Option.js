import React from 'react';

const Option = ({ option, handleClick }) => {
    console.log(option);
    return (
        <div>

            <div className='  '>
                <h1 className='bg-blue-200 p-4 m-4 rounded-lg text-lg'>{option}  <input onClick={() => handleClick(option)} className='radio' type="radio" name="" id="" /></h1>
            </div>

        </div>
    );
};

export default Option;