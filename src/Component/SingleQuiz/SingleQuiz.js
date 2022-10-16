import React from 'react';
import Option from '../Option/Option';

const SingleQuiz = (props) => {
    console.log(props)
    const { question } = props;

    return (
        <div className='p-5'>
            <h1 className='text-3xl m-5 text-indigo-800'> {props.question.question}</h1>
            <div className='grid grid-cols-2 p-4 m4 '>
                {
                    question.options.map(option => <Option key={props.id} option={option} />)
                }
            </div>

        </div>
    );
};

export default SingleQuiz;