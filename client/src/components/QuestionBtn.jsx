export function QuestionBtn({children, studentName, courseName}){
    return (
        <div className="p-5 border-x border-t border-stone-400 last:border-b cursor-pointer text-stone-700 hover:text-black">
            <p className="font-bold text-lg">{children}</p>
            <p className="text-sm text-stone-400">{`Pergunta de ${studentName} - ${courseName}`}</p>
        </div>
    )
}