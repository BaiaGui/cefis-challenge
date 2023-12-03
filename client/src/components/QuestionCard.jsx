import { Link } from "react-router-dom"

export function QuestionCard({courseTitle, courseTeacher, courseDuration, courseId}){
    return (
        <Link to={`course/${courseId}`}>
            <article className="border w-full h-56 p-5 flex flex-col justify-between box-border hover:border-2">
                <p className="font-bold text-lg leading-tight">{courseTitle}</p>
                <p className="text-md text-stone-500">Por {courseTeacher} - {courseDuration}h</p>
            </article>
        </Link>
    );
}