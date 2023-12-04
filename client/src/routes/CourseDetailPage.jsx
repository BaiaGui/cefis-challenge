import { FilledButton } from '../components/ButtonStyles.jsx';
import { InputTextNoLabel } from '../components/InputComponents.jsx';
import { QuestionBtn } from '../components/QuestionBtn.jsx';
import { Title } from '../components/Title.jsx'
import { NavBarMenu } from '../components/navBarMenu.jsx';

export function CourseDetailPage() {
    return (
        <section className="flex">
            <NavBarMenu/>
            <main className="w-full min-h-screen px-32 pb-10 pt-36">

                    <Title>Nome do Curso</Title>
                    <p>Professor Xavier</p>

                <form action="" className='flex gap-2 mt-40'>
                    <InputTextNoLabel placeholder={"Escrever Dúvida..."} className={"w-full"} />
                    <FilledButton>Enviar</FilledButton>
                </form>
                <div className="mt-5">
                    <QuestionBtn studentName="Carlos Eduardo Pereira" courseName="Gestão de Projetos na Prática">Como fazer isso?</QuestionBtn>
                </div>


            </main>
        </section>
    );
}