import { QuestionCard } from "./QuestionCard";

export function CardGrid({ data, currentPage, cardsPerPage}) {
    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    const currentPageCards = data.slice(firstCardIndex, lastCardIndex);

    const cards = currentPageCards.map(course => <QuestionCard key={course.id} courseId={course.id} courseTitle={course.title} courseTeacher={course.teacher_name} courseDuration={course.duration} />)

    return (
        <nav className='gridContainer justify-center px-5 md:px-20 lg:px-80'>
            {cards}
        </nav>
    );
}