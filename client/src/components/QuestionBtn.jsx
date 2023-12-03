import { Link } from "react-router-dom"

export function QuestionBtn({children, studentName, courseName, questionId}){
    return (
        <Link to={`question/${questionId}`}>
            <div className="p-5 box-border border-x border-t bg-white border-stone-400 last:border-b cursor-pointer text-stone-700 hover:text-black">
                <p className="font-bold text-lg">{children}</p>
                <p className="text-sm text-stone-400">{`Pergunta de ${studentName} - ${courseName}`}</p>
            </div>
        </Link>
    )
}