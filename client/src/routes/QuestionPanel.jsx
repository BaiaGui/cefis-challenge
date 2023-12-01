import { SidebarMenu } from "../components/SidebarMenu.jsx";
import { Title } from "../components/Title.jsx";
import { QuestionBtn } from "../components/QuestionBtn.jsx";


export function QuestionPanel(){
    return(
        <section className="flex">
            <SidebarMenu/>
            <main className="w-full min-h-screen px-32 pb-10 pt-36 ml-72">
                    <Title>Perguntas</Title>
                    <div className="mt-5">
                    <QuestionBtn studentName="Carlos Eduardo Pereira" courseName="Gestão de Projetos na Prática">Como fazer isso?</QuestionBtn>
                    <QuestionBtn studentName="Carlos Eduardo Pereira" courseName="Gestão de Projetos na Prática">Como fazer isso?</QuestionBtn>
                    </div>
            </main>
        </section>
    );
}

