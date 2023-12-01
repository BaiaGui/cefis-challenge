export function SidebarMenu(){
    return (
        <nav className="h-screen w-72 bg-stone-900 fixed">
            <div className="border-b border-white/20 px-5 py-10 text-white">
                <p className="font-bold">PAINEL DE CONTROLE</p>
                <p className="text-sm">Usuário: Carlos Teixeira</p>
            </div>
            <a href="#" className="w-full block px-5 py-5 border-b border-white/20 text-white hover:bg-white/10">Painel Usuários</a>
         
        </nav>
    )
}

