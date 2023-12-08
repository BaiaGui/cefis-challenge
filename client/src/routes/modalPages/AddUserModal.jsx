import { FilledButton, FramedButton } from "../../components/ButtonStyles";
import { ModalTemplate } from "../../components/ModalTemplate";
import { InputSelection, InputText } from "../../components/InputComponents";
import { useNavigate, useParams } from "react-router-dom";


export function AddUserModal({editMode}) {

    const navigate = useNavigate();
    const { userId } = useParams();

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
    
        if(editMode){
            const putResponse = await fetch(`https://cefis-challenge.onrender.com/user/${userId}`, {
                method: 'PUT',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    name: formJson.userName,
                    type: formJson.userType
                })
            })
            if (putResponse.ok) {
                navigate(-1);
              }else{
                throw new Error('Error submitting the form');
              }
        }
        else{
            const postResponse = await fetch('https://cefis-challenge.onrender.com/user', {
                method: 'POST',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    name: formJson.userName,
                    type: formJson.userType
                })
            })
            if (postResponse.ok) {
                navigate(-1);
              }else{
                throw new Error('Error submitting the form');
              }
        }
        
    }

    return (
        <ModalTemplate >
            <p className="font-bold uppercase text-lg">{editMode?'Editar Usuário':'Cadastrar Usuário'}</p>
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
                <InputText id="userName" label="Nome" name="userName" placeholder="Digitar nome..."/>
                <InputSelection id="userType" name="userType" label="Tipo">
                    <option value="teacher">Professor</option>
                    <option value="student">Aluno</option>
                </InputSelection>
                <div className="flex justify-end items-end h-full">
                    <FilledButton>Confirmar</FilledButton>
                </div>
            </form>
        </ModalTemplate>
    );
}