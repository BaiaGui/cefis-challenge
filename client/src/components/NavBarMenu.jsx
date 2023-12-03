import { Link } from "react-router-dom";

export function NavBarMenu(){
    return (
        <nav className="flex w-full h-16 justify-between items-center px-20 border-b border-stone-700 absolute overflow-x-hidden">
            <div>
                <p className="text-sm">Logado com:</p>
                <p className="font-bold">Guilherme Baia</p>
            </div>
            <div className="flex gap-5 text-stone-500">
                <Link to="/"><p className="hover:text-black">Cursos</p></Link>
                <Link to="/userpanel"><p className="hover:text-black">Painel Admin</p></Link>
            </div>
        </nav>
    );
}