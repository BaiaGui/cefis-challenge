import { FilledButton } from "../components/FilledButton";
import { ModalTemplate } from "../components/ModalTemplate";

export function AnswerQuestionModal(){
    return (
        <ModalTemplate>
            <p>Esta é a pergunta</p>
            <FilledButton>Responder</FilledButton>
        </ModalTemplate>
    )
}