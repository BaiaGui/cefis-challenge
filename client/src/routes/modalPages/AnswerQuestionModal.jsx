
import { useParams } from "react-router-dom";
import { FilledButton, FramedButton } from "../../components/ButtonStyles";
import { ModalTemplate } from "../../components/ModalTemplate";
import { useState, useEffect } from "react";


export function AnswerQuestionModal(){

    const {questionId} = useParams();
    const [questionData, setQuestionData] = useState();
    const [answerText, setAnswerText] = useState();

    useEffect(()=>{
        const fetchData = async()=>{
            const questionResponse = await fetch(`http://localhost:3000/question/${questionId}`);
            const questionData = await questionResponse.json();
            setQuestionData(questionData[0]);
        }
        fetchData();
    },[])

    function handleSubmit(e){
        e.preventDefault();
        console.log('enviado')

        
        const answer = {answerText}

        // fetch('/endpoint', {
        //     method: 'POST',
        //     headers: {"Content-Type":"application/json"},
        //     body: JSON.stringify(answer)
        // })
    }

    if(questionData){
        console.log(questionData)
    }

    return (
        <ModalTemplate >
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
                <div className="mb-10 ">
                    {questionData?<p className="text-lg font-bold">{questionData.text}</p>:<p>Carregando...</p>}
                    {questionData && <p className="text-slate-500 text-sm">{`Pergunta de ${questionData.student_name} - ${questionData.course_title}`}</p>}
                </div>
                <label htmlFor="answerText" className="font-bold">Resposta</label>
                <textarea onChange={(e)=> setAnswerText(e.target.value)} value={answerText} name="" id="answerText"  placeholder="Escrever resposta..." className="w-full h-full p-3 border resize-none" required></textarea>
                <div className="mt-10 flex justify-end gap-2">
                    <FilledButton>Responder</FilledButton>
                </div>
            </form>
        </ModalTemplate>
    )
}