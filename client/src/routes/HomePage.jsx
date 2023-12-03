import { Title } from '../components/Title.jsx'
import { NavBarMenu } from '../components/navBarMenu';
import { QuestionCard } from '../components/QuestionCard.jsx';

export function HomePage(){
    return (
        <main>
            <NavBarMenu/>
            <Title>Nossos Cursos</Title>

            <nav>
                <QuestionCard courseTitle={"Curso de como fazer algo"} courseTeacher={"Castanho do Pará"} courseDuration={"50"}/>
            </nav>
        </main> 
    );
}


