
import { useNavigate, useParams } from "react-router-dom";
import { FilledButton, FramedButton } from "../../components/ButtonStyles";
import { ModalTemplate } from "../../components/ModalTemplate";
import { useState, useEffect } from "react";


export function AnswerQuestionModal(){

    const  navigate = useNavigate();
    const {questionId} = useParams();
    const [questionData, setQuestionData] = useState();
    const [answerText, setAnswerText] = useState();

    useEffect(()=>{
        const fetchData = async()=>{
            const questionResponse = await fetch(`https://cefis-challenge.onrender.com/question/${questionId}`);
            const questionData = await questionResponse.json();
            setQuestionData(questionData[0]);
        }
        fetchData();
    },[])

    async function handleSubmit(e){
        e.preventDefault();

        // const form = e.target;
        // const formData = new FormData(form);
        // const formJson = Object.fromEntries(formData.entries());
        // console.log(answerText)
        
        const postResponse = await fetch('https://cefis-challenge.onrender.com/answer', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            questionId,
            text: answerText
          }),
        })
        if (postResponse.ok) {
            navigate(-1);
        }else{
            throw new Error('Error submitting the form');
        }

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