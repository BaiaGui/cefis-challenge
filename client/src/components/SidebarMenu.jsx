import { Link } from "react-router-dom"

export function SidebarMenu(){
    return (
        <nav className="flex flex-col items-start justify-start h-screen w-72 bg-stone-900 fixed">
            <div className="border-b w-full border-white/20 px-5 py-10 text-white">
                <p className="font-bold">PAINEL DE CONTROLE</p>
                <p className="text-sm">Bem-Vindo</p>
            </div>
            <Link to="/userpanel" className="w-full block px-5 py-5 border-b border-white/20 text-white hover:bg-white/10">Painel Usuários</Link>
            <Link to="/coursepanel" className="w-full block px-5 py-5 border-b border-white/20 text-white hover:bg-white/10">Painel Cursos</Link>
            <Link to="/questionpanel" className="w-full block px-5 py-5 border-b border-white/20 text-white hover:bg-white/10">Painel Perguntas</Link>
            <div className="h-full w-full flex">
            <Link to="/" className="w-full block px-5 py-5 border-b bg-black border-white/20 text-white hover:bg-white/10 self-end">Modo Usuário</Link>
            </div>
            

        </nav>
    )
}

