import { FilledButton, FramedButton } from "../components/ButtonStyles";
import { ModalTemplate } from "../components/ModalTemplate";

export function AnswerQuestionModal(){
    return (
        <ModalTemplate>
            <form action="" className="flex flex-col w-full h-full">
                <div className="mb-10 ">
                    <p className="text-lg font-bold">Essa é a pergunta?</p>
                    <p className="text-slate-500 text-sm">Carlos Pereira - Curso de fazer algo</p>
                </div>
                <label htmlFor="answerText" className="font-bold">Resposta</label>
                <textarea name="" id="answerText"  placeholder="Escrever resposta..." className="w-full h-full p-3 border resize-none"></textarea>
                <div className="mt-10 flex justify-end gap-2">
                <FramedButton>Cancelar</FramedButton>
                <FilledButton>Responder</FilledButton>
                </div>
            </form>
        </ModalTemplate>
    )
}