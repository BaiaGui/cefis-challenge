import { useEffect, useState } from "react";

export function QuestionResponse({questionId}){

    const [answerData, setAnswerData] = useState();

    useEffect(()=>{
        const fetchData = async () => {
            const answerResponse = await fetch(`https://cefis-challenge.onrender.com/answer/${questionId}`);
            const answer = await answerResponse.json();
            setAnswerData(answer[0]);  
        };
        fetchData();
    },[])

    return (
        <div className="mt-5 whitespace-pre-wrap">
        {answerData?<p>Resposta: {answerData.text}</p>:null}
        </div>
    );
}