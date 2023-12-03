
import { FilledButton, FramedButton } from "../../components/ButtonStyles";
import { ModalTemplate } from "../../components/ModalTemplate";
import { useState } from "react";


export function AnswerQuestionModal({questionData}){

    const [answerText, setAnswerText] = useState('');

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

    return (
        <ModalTemplate >
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
                <div className="mb-10 ">
                    <p className="text-lg font-bold">{/*questionData.questionText*/}</p>
                    <p className="text-slate-500 text-sm">{/*`${questionData.studentName} - ${questionData.courseName}`*/}</p>
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