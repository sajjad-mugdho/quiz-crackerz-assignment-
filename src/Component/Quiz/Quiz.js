import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const quiz = useLoaderData().data
    // console.log(quiz);

    return (
        <div>
            <img className='w-[200px] items-center' src={quiz.logo} alt="logo" />
            <h1 className='text-4xl m-2'>Quiz On {quiz.name}</h1>
            <h2 className='text-2xl mb-5'>Total Quiz: {quiz.total}</h2>
            <div className='flex justify-center flex-col items-center '>
                {
                    quiz.questions.map(question => <SingleQuiz question={question} key={question.id}></SingleQuiz>)
                }
            </div>
        </div>
    );
};

export default Quiz;