import { useParams } from 'react-router-dom';
import { FilledButton } from '../components/ButtonStyles.jsx';
import { InputTextNoLabel } from '../components/InputComponents.jsx';
import { QuestionBtn } from '../components/QuestionBtn.jsx';
import { Title } from '../components/Title.jsx'
import { NavBarMenu } from '../components/navBarMenu.jsx';
import { useEffect, useState } from 'react';

export function CourseDetailPage() {

    let { courseId } = useParams();
    const [courseData, setCourseData] = useState();
    const [courseQuestions, setCourseQuestions] = useState();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const courseResponse = await fetch(`http://localhost:3000/course/${courseId}`);
            const courseData = await courseResponse.json();
            setCourseData(courseData[0]);
    
            const questionResponse = await fetch(`http://localhost:3000/question/course/${courseId}`);
            const courseQuestions = await questionResponse.json();
            setCourseQuestions(courseQuestions);
          } catch (error) {
            console.error('Erro ao buscar dados:', error)
            courseId = error;
          }
        };
    
        fetchData();
      }, []);

    if(courseData){
        console.log(courseQuestions)
        return (
            <section className="flex">
                <NavBarMenu/>
                <main className="w-full min-h-screen px-32 pb-10 pt-36">
    
                        <Title>{courseData.title}</Title>
                        <p>{courseData.teacher_name}</p>
    
                    <form action="" className='flex gap-2 mt-40'>
                        <InputTextNoLabel placeholder={"Escrever Dúvida..."} className={"w-full"} />
                        <FilledButton>Enviar</FilledButton>
                    </form>
                    <CourseQuestionList data={courseQuestions}/>
                   
    
    
                </main>
            </section>
        );
    }

   
}

function CourseQuestionList({data}){
    let questionList
    if(data){
        questionList = data.map((question) => <QuestionBtn studentMode={true} key={question.id} questionId={question.id}>{question.text}</QuestionBtn> )
    }
    

    return (
        <div className="mt-5">
      {questionList}
    </div>
    );
}