import { Title } from '../components/Title.jsx'
import { NavBarMenu } from '../components/navBarMenu';
import { QuestionCard } from '../components/QuestionCard.jsx';
import './HomePage.css'
import { useEffect, useState } from 'react';

export function HomePage() {

    const [coursesData, setCoursesData] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6


    useEffect(()=>{
        fetch('http://localhost:3000/course')
        .then(res =>{
            return res.json()
        })
        .then(data=>{
            setCoursesData(data);
        })
    },[])

    
    

    return (

        <section className='h-full pt-28 flex flex-col items-center'>
            <Title>Nossos Cursos</Title>
            <div className='w-full flex flex-col justify-between h-full mt-16'>
            {coursesData && <CardList data={coursesData} currentPage={currentPage} cardsPerPage={cardsPerPage} />}
            {coursesData && <PaginationNav totalCourses={coursesData.length} cardsPerPage={cardsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>}
            </div>


        </section>
        
    );
}


function CardList({ data, currentPage, cardsPerPage}) {
    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    const currentPageCards = data.slice(firstCardIndex, lastCardIndex);

    const cards = data.map(course => <QuestionCard key={course.id} courseId={course.id} courseTitle={course.title} courseTeacher={course.teacher_name} courseDuration={course.duration} />)

    return (
        <nav className='gridContainer justify-center px-5 md:px-20 lg:px-80'>
            {cards}
        </nav>
    );
}

function PaginationNav({ totalCourses, cardsPerPage, setCurrentPage, currentPage}) {

    let pages = [];
    for (let cont = 1; cont <= Math.ceil(totalCourses / cardsPerPage); cont++) {
        pages.push(cont);
    }

    const pagesBtn = pages.map((page, index) => 
    {
        return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
    })

    return (
        <nav className='flex w-full justify-center items-center gap-5 p-5'>
        <button disabled={currentPage==1} onClick={() => setCurrentPage(currentPage-1)}>Anterior</button>
            {pagesBtn}
         <button disabled={currentPage==Math.ceil(totalCourses / cardsPerPage)} onClick={() => setCurrentPage(currentPage+1)}>Próximo</button>
        </nav>
    );
}

