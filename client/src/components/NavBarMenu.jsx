import { Link } from "react-router-dom";

export function NavBarMenu(){
    return (
        <header className="flex justify-between items-center px-20 py-2 border-b border-stone-700">
            <div>
                <p className="text-sm">Logado com:</p>
                <p className="font-bold">Guilherme Baia</p>
            </div>
            <div className="flex gap-5 text-stone-500">
                <Link to=""><p className="hover:text-black">Cursos</p></Link>
                <Link to=""><p className="hover:text-black">Painel Admin</p></Link>
            </div>
        </header>
    );
}