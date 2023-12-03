export function FilledButton({children, onClick}){
    return (
        <button onClick={onClick} className={`w-36 bg-cyan-700 text-sm text-white font-bold py-4 hover:bg-cyan-600 hover:scale-105`}>{children}</button>
    )
}

export function FramedButton({children, handleClick}){
    return (
        <button onClick={onClick} className="w-36 border border-stone-600 text-sm text-stone-700 font-bold py-4 hover:text-black hover:scale-105">{children}</button>
    )
}