
import { Link } from "react-router-dom"
import { QuestionResponse } from "./QuestionResponse";

export function QuestionBtn({children, courseName, questionId, studentMode}){

    const urlLink = studentMode?null:`question/${questionId}`;

    return (
        <Link to={urlLink}>
            <div className="p-5 box-border border-x border-t bg-white border-stone-400 last:border-b cursor-pointer text-stone-700 hover:text-black">
                <p className="font-bold text-lg">{children}</p>
                {!studentMode && <p className="text-sm text-stone-400">{ `${courseName}`}</p>}
                <QuestionResponse questionId={questionId}/>

            </div>
        </Link>
    )
}

