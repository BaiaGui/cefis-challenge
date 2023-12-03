import { FilledButton, FramedButton } from "../../components/ButtonStyles";
import { ModalTemplate } from "../../components/ModalTemplate";
import { useState } from "react";
import { InputSelection, InputText } from "../../components/InputComponents";


export function AddCourseModal({editMode}) {

    //if edit mode true then updates id info

    const [answerText, setAnswerText] = useState('');

    const answer = { answerText }

    function handleSubmit(e) {
        if(editMode){
            //UPDATE
            //Use 'useParams' from react router to find ID
        }
        else{
        e.preventDefault();
        console.log('enviado')
        // fetch('/endpoint', {
        //     method: 'POST',
        //     headers: {"Content-Type":"application/json"},
        //     body: JSON.stringify(answer)
        // })
        }
    }

    return (
        <ModalTemplate >
            <p className="font-bold uppercase text-lg">Cadastrar Curso</p>
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
                <InputText id="courseName" label="Curso" placeholder="Nome do curso..."/>
                <InputText id="courseDuration" label="Duração" placeholder="Qtd. horas"/>
                <InputSelection id="courseTeacher" label="Professor">
                    {/* Get All Teachers*/}
                    <option value="">Selecionar</option>
                </InputSelection>
                <div className="flex justify-end items-end h-full">
                    <FilledButton>Cadastrar</FilledButton>
                </div>
            </form>
        </ModalTemplate>
    );
}