import { Link } from "react-router-dom"

export function SidebarMenu(){
    return (
        <nav className="h-screen w-72 bg-stone-900 fixed">
            <div className="border-b border-white/20 px-5 py-10 text-white">
                <p className="font-bold">PAINEL DE CONTROLE</p>
                <p className="text-sm">Usuário: Carlos Teixeira</p>
            </div>
            <Link to="/userpanel" className="w-full block px-5 py-5 border-b border-white/20 text-white hover:bg-white/10">Painel Usuários</Link>
            <Link to="/coursepanel" className="w-full block px-5 py-5 border-b border-white/20 text-white hover:bg-white/10">Painel Cursos</Link>
            <Link to="/questionpanel" className="w-full block px-5 py-5 border-b border-white/20 text-white hover:bg-white/10">Painel Perguntas</Link>
         
        </nav>
    )
}

