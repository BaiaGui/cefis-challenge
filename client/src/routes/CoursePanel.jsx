import { SidebarMenu } from "../components/SidebarMenu.jsx";
import { FilledButton } from "../components/ButtonStyles.jsx";
import { Title } from "../components/Title.jsx";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { CourseTableRow } from "../components/CourseTableRow.jsx";

export function CoursePanel(){

    let coursesList;
    const [coursesData, setCoursesData]= useState();
    useEffect(()=>{
        const fetchData = async()=>{
            const coursesResponse = await fetch('https://cefis-challenge.onrender.com/course');
            const coursesData = await coursesResponse.json();
            setCoursesData(coursesData);

        } 
        fetchData();
    },[])

    if(coursesData){
        coursesList = coursesData.map((course)=> <CourseTableRow key={course.id} courseData={course}/>)
    }


    return(
        <section className="flex">
            <SidebarMenu/>
            <main className="w-full min-h-screen px-32 pb-10 pt-36 ml-72">
                <div className="flex justify-between items-center mb-5">
                <Title>Cursos</Title>
                <Link to="newcourse">
                    <FilledButton>+ Novo Curso</FilledButton>
                </Link>
                </div>
                <table className="table-auto w-full text-left text-stone-500">
                    <thead>
                    <tr className="bg-stone-900 text-white border-x border-stone-900">
                        <th className="py-5 px-5">ID</th>
                        <th>Título</th>
                        <th>Duração</th>
                        <th>Professor</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {coursesList}
                    </tbody>
                
                </table>
            </main>
            <Outlet/>
        </section>
    );
}

