import { FilledButton, FramedButton } from "../../components/ButtonStyles";
import { ModalTemplate } from "../../components/ModalTemplate";
import { useState } from "react";
import { InputSelection, InputText } from "../../components/InputComponents";


export function AddUserModal({editMode}) {

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
            <p className="font-bold uppercase text-lg">{editMode?'Editar Usuário':'Cadastrar Usuário'}</p>
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
                <InputText id="userName" label="Nome" placeholder="Digitar nome..."/>
                <InputSelection id="userType" label="Tipo">
                    <option value="">Professor</option>
                    <option value="">Aluno</option>
                </InputSelection>
                <div className="flex justify-end items-end h-full">
                    <FilledButton>Confirmar</FilledButton>
                </div>
            </form>
        </ModalTemplate>
    );
}