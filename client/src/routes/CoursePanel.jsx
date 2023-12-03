import { SidebarMenu } from "../components/SidebarMenu.jsx";
import { FilledButton } from "../components/ButtonStyles.jsx";
import { Title } from "../components/Title.jsx";
import { Link, Outlet } from "react-router-dom";
import trashIcon  from "../assets/trash.svg"
import pencilIcon  from "../assets/pencil.svg"

export function CoursePanel(){


    return(
        <section className="flex">
            <SidebarMenu/>
            <main className="w-full min-h-screen px-32 pb-10 pt-36 ml-72">
                <div className="flex justify-between items-center mb-5">
                <Title>Cursos</Title>
                <Link to="newcourse">
                    <FilledButton>+ Novo Curso</FilledButton>
                </Link>
                </div>
                <table className="table-auto w-full text-left text-stone-500">
                    <thead>
                    <tr className="bg-stone-900 text-white border-x border-stone-900">
                        <th className="py-5 px-5">ID</th>
                        <th>Título</th>
                        <th>Duração</th>
                        <th>Professor</th>
                        <th></th>
                
                    </tr>
                    </thead>
                    <tbody>
                    <tr className=" border-b border-x border-slate-300 hover:text-stone-900">
                        <td className="py-6 px-5">12345</td>
                        <td>Gestão de projetos na prática</td>
                        <td>50h</td>
                        <td>Roberto Carvalho</td>
                        <td>
                            <div className="w-full h-full flex items-center justify-center gap-5">
                            <Link to=""><img src={trashIcon} alt="" /></Link>
                            <Link to="editcourse/1"><img src={pencilIcon} alt="" /></Link>
                            </div>

                        </td>
                    </tr>
                    </tbody>
                
                </table>
            </main>
            <Outlet/>
        </section>
    );
}



