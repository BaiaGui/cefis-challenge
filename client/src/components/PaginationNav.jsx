export function PaginationNav({ totalCourses, cardsPerPage, setCurrentPage, currentPage}) {

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
        <button disabled={currentPage==1} onClick={() => setCurrentPage(currentPage-1)} className="disabled:opacity-50">Anterior</button>
            {pagesBtn}
         <button disabled={currentPage==Math.ceil(totalCourses / cardsPerPage)} onClick={() => setCurrentPage(currentPage+1)} className="disabled:opacity-50">Próximo</button>
        </nav>
    );
}

