import { useParams } from 'react-router-dom';
import { FilledButton } from '../components/ButtonStyles.jsx';
import { InputTextNoLabel } from '../components/InputComponents.jsx';
import { QuestionBtn } from '../components/QuestionBtn.jsx';
import { Title } from '../components/Title.jsx'
import { NavBarMenu } from '../components/NavBarMenu.jsx';
import { useEffect, useState } from 'react';

export function CourseDetailPage() {

  const { courseId } = useParams();
  const [courseData, setCourseData] = useState();
  const [sentState, setSentState] = useState(0);
  const [courseQuestions, setCourseQuestions] = useState();
  const [errorState, setErrorState] = useState();

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
      }
    };

    fetchData();
  }, [sentState]);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const studentId = sessionStorage.getItem('loggedUser');

    const postResponse = await fetch('http://localhost:3000/question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        courseId,
        studentId,
        text: formJson.questionText
      }),
    })
    const resJson = await postResponse.json()
    if (postResponse.ok) {
      setSentState(sentState + 1);

    } else {
      setErrorState(resJson.message);
    }

  }

  if (courseData) {
    console.log(courseQuestions)
    return (
      <section className="flex">
        <NavBarMenu />
        <main className="w-full min-h-screen px-32 pb-10 pt-36">


          <Title>{courseData.title}</Title>
          <p>{courseData.teacher_name}</p>
          <form onSubmit={handleSubmit} className='flex flex-col gap-2 mt-60'>
          {errorState && <p className='text-red-600'>{errorState}</p>}
            <div className='flex gap-2 w-full'>
              <InputTextNoLabel placeholder={"Escrever Dúvida..."} name="questionText" className={"w-full"} />
              <FilledButton>Enviar</FilledButton>
            </div>
          </form>
          <CourseQuestionList data={courseQuestions} />



        </main>
      </section>
    );
  } else {
    return (
      <div className='flex items-center justify-center w-full h-screen'>
        <p>Carregando dados...</p>
      </div>
    );
  }


}

function CourseQuestionList({ data }) {

  let questionList
  if (data) {
    questionList = data.map((question) => <QuestionBtn studentMode={true} key={question.id} questionId={question.id}>{question.text}</QuestionBtn>)
    questionList.reverse();
  }


  return (
    <div className="mt-5">
      {questionList}
    </div>
  );
}