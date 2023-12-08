import { SidebarMenu } from "../components/SidebarMenu.jsx";
import { Title } from "../components/Title.jsx";
import { QuestionBtn } from "../components/QuestionBtn.jsx";
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react";


export function QuestionPanel(){

    let questionList;
    const teacherId = sessionStorage.getItem('loggedUser'); 
    const [questionsData, setQuestionsData] = useState();
    useEffect(()=>{
        const fetchData = async()=>{
            const questionResponse = await fetch(`https://cefis-challenge.onrender.com/question/teacher/${teacherId}`);
            const questionsData = await questionResponse.json();
            setQuestionsData(questionsData);
        }
        fetchData();
    },[])

    if(questionsData){
        questionList = questionsData.map((question)=><QuestionBtn key={question.id} questionId={question.id} courseName={question.coursetitle} studentMode={false}>{question.text}</QuestionBtn>)
        
    }


    return(
        <section className="flex">
            <SidebarMenu/>
            <main className="w-full min-h-screen px-32 pb-10 pt-36 ml-72">
                    <Title>Perguntas para o professor</Title>
                    <div className="mt-5">
                        {questionsData?questionList:<p className="text-black/50">Carregando...</p>}
                        {questionsData && (questionList.length == 0) && <p  className="text-black/50">Sem perguntas</p>}
                    </div>
                    

            </main>
            <Outlet/>
        </section>
    );
}

