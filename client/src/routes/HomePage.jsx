import { Title } from '../components/Title.jsx'
import './HomePage.css'
import { useEffect, useState } from 'react';
import { PaginationNav } from '../components/PaginationNav.jsx';
import { CardGrid } from '../components/CardGrid.jsx';

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
            <div className='w-full flex flex-col justify-between items-center h-full mt-16'>
            {coursesData?<CardGrid data={coursesData} currentPage={currentPage} cardsPerPage={cardsPerPage} />:<p>Carregando...</p>}
            {coursesData && <PaginationNav totalCourses={coursesData.length} cardsPerPage={cardsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>}
            </div>


        </section>
        
    );
}