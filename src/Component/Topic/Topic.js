import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import QuizSection from '../QuizSection/QuizSection';
import './Topic.css'

const Topic = () => {

    const quizzes = useLoaderData();

    console.log('Topic:', quizzes);

    return (
        <div>
            <header>
                <Hero />
            </header>
            <div className=' grid grid-cols-4 gap-5 justify-center m-20'>

                {
                    quizzes.map(quiz => <QuizSection key={quiz.id} quiz={quiz} />)
                }
            </div>


        </div>

    );
};

export default Topic;