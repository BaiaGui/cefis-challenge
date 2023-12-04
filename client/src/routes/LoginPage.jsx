import { FilledButton } from "../components/ButtonStyles";
import { InputSelection } from "../components/InputComponents";
import { Title } from "../components/Title";

export function LoginPage(){
    return (
        <main className="flex flex-col items-center justify-center w-full min-h-screen">
                            
            <form action="" className="flex flex-col w-1/3 border border-stone-400 p-10">
            <Title>Login</Title>
                <div className="flex my-28 gap-1 ">
                <InputSelection label={"Nome"} className="w-full ">
                    <option value="">José Alencar</option>
                </InputSelection>
                <InputSelection label={"Tipo"}>
                <option value="">Professor</option>
                <option value="">Aluno</option>
                </InputSelection>
                </div>
                <div className=" flex justify-end">
                <FilledButton >Entrar</FilledButton>
                </div>
                
            </form>
        </main>
    );
}