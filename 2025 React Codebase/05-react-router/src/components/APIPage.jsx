import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

const APIPage = () => {

    // const [imgUrl, setImgUrl] = useState('');
    // const [questions_answers, setQuestions_Answers] = useState({});

    const { cat_img_url, questions_answers } = useLoaderData();

    const [res, setRes] = useState('');

    const inputElem = useRef(null);



    const handleSubmitAnswer = () => {
        const input_val = (inputElem.current.value).trim();
        setRes('');
        if (input_val.length === 0) {
            return;
        }

        if (questions_answers.correct_answer === input_val) {
            setRes(`Great! Correct Answer (${input_val})`);
        } else {
            setRes(`Incorrect Answer! The correct answer is ${questions_answers.correct_answer}`);
        }

        inputElem.current.value = '';
    };

    /* useEffect(() => {
         fetch('https://api.thecatapi.com/v1/images/search')
             .then(response => response.json())
             .then(data => {
                 const imageUrl = data[0].url;
                 setImgUrl(imageUrl);
                 console.log(`Here's a random cat image: ${imageUrl}`);
             });
 
         fetch('https://opentdb.com/api.php?amount=1&type=multiple')
             .then(response => response.json())
             .then(data => {
                 const question = data.results[0].question;
                 setQuestions_Answers(data.results[0]);
                 console.log(data.results[0])
                 console.log(`Trivia Question: ${question}`);
             });
     }, []);*/

    return (
        <div className=" p-7 w-full h-min-[65vh]">
            <h1 className="text-center font-bold text-5xl">Fetched Data from API</h1>
            <div id="grid-container" className="w-full my-22 rounded-md shadow-2xl bg-amber-300 overflow-x-hidden">
                <div className=" bg-blue-400">
                    <div>
                        <h3 className="font-bold text-4xl text-center">Random Cat Image 😉</h3>
                        <img className="my-5" src={cat_img_url || undefined} width={500} alt="funny cat image" />
                    </div>
                </div>
                <div className=" bg-violet-300">
                    <div className="w-fit">
                        <h3 className="font-bold text-4xl text-center">Random Questions for Fun 😉</h3>
                        <div className="text-2xl my-5"><b>Question:</b> {questions_answers.question}</div>
                        <input
                            type="text"
                            placeholder="Enter your answer"
                            ref={inputElem}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        <button type="button" className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 cursor-pointer my-5" onClick={handleSubmitAnswer}>Submit Answer</button>
                        <p className={`my-5 text-2xl font-medium ${res.includes('Great') ? "text-gray-600" : "text-red-600"}`}>{res}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export const FetchForLoader = async () => {
    try {
        const response = await Promise.all([fetch('https://api.thecatapi.com/v1/images/search'), fetch('https://opentdb.com/api.php?amount=1&type=multiple')]);

        const data = await Promise.all(response.map(each => each.json()));

        const [cat_img_url, questions_obj] = data;

        return {
            cat_img_url: cat_img_url[0]?.url,
            questions_answers: questions_obj?.results[0]
        };

    } catch (error) {
        console.error(`${error.name} -> ${error.message}`);
        return { cat_img_url: '', questions_answers: {} }
    }



};

export default APIPage;