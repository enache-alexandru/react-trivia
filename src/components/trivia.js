import React, { useState, useEffect } from "react";
import QuestionItem from "./questionItem";

const triviaApi = "https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=5";

// This component uses this api: 
// https://the-trivia-api.com/docs/



// const FetchQuestions = async () => {
//     await fetch(triviaApi)
//         .then(response => response.json())
//         .then(response => {
//             console.log("trivia api response ==>",response);
//             return response
//         })
//         .catch(err => console.error(err));
// }


function Trivia() {
    let [FetchQuestions, setFechedQuestions] = useState([]);

    useEffect(() => {
        fetch(triviaApi)
            .then(response => response.json())
            .then(response => setFechedQuestions(response))
        .catch(err => console.error(err));
        
    }, []);
  
    return (
      <div>
        <QuestionItem allQuestions={FetchQuestions}></QuestionItem>
      </div>
    );
  }

export default Trivia



// https://stackoverflow.com/questions/66507362/react-async-and-await-not-working-with-fetch
// https://dmitripavlutin.com/javascript-fetch-async-await/
