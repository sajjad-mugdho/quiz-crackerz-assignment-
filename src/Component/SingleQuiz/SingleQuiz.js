

import Option from '../Option/Option';
import './SingleQuiz.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const SingleQuiz = (props) => {
    console.log(props)
    const question = props.question;


    // const handleCorrectAns = () => {
    //     toast("Wow so easy!");
    // }

    const [seeAnswer, setSeeAnswer] = useState(false);


    const notify1 = () => toast.success("woop woop! you got it right", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notify2 = () => toast.error("uh oh! try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const seeAns = (props) => toast.info(`Hint: ${props}`)

    useEffect(() => {
        if (seeAnswer) {
            // document.getElementById('ansId').innerText = question.correctAnswer;
            seeAns(question.correctAnswer);
        }
        else {
            document.getElementById('ansId').innerText = "";
        }
    }
        , [seeAnswer])


    const wrong = (id) => {

        console.log('uh oh! try again');
        notify2();

    };
    const correct = (id) => {

        console.log('woop woop! you got it right');
        notify1();

    };

    // console.log(question);
    const correctAnswer = question.correctAnswer;

    const optionClick = question.option;
    const handleClick = (optionClick) => {
        console.log('clicked', optionClick);
        (optionClick == question.correctAnswer) ? correct(optionClick) : wrong(optionClick);
    }



    return (
        <div className='p-5' id={question.id}>
            <h1 className='text-3xl m-5 text-indigo-800'> {question.question}</h1>

            <div className='text-lg text-accent-focus bg-red-200 p-4'><button onClick={() => setSeeAnswer(!seeAnswer)} className='text-info'>Hint <FontAwesomeIcon icon={faEye} /></button>
            </div>
            <p id='ansId'></p>

            <button></button>
            <div className='grid grid-cols-2 p-4 m4 '>
                {
                    question.options.map(option => <Option key={props.id} handleClick={handleClick} option={option} />)
                }
            </div>
            <ToastContainer />

        </div>
    );
};

export default SingleQuiz;