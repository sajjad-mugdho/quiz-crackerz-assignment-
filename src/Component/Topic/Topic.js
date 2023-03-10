import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import QuizSection from '../QuizSection/QuizSection';
import './Topic.css'

const Topic = () => {

    const quizzes = useLoaderData();



    return (
        <div>
            <header>
                <Hero />
            </header>
            <div className=' grid sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center m-20'>

                {
                    quizzes.data.map(quiz => <QuizSection key={quiz.id} quiz={quiz} />)
                }
            </div>


        </div>

    );
};

export default Topic;