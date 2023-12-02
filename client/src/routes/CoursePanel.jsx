import { SidebarMenu } from "../components/SidebarMenu.jsx";
import { FilledButton } from "../components/ButtonStyles.jsx";
import { Title } from "../components/Title.jsx";

export function CoursePanel(){
    return(
        <section className="flex">
            <SidebarMenu/>
            <main className="w-full min-h-screen px-32 pb-10 pt-36 ml-72">
                <div className="flex justify-between items-center mb-5">
                <Title>Cursos</Title>
                <FilledButton>+ Novo Curso</FilledButton>
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
                        <td>X Edit</td>
                    </tr>
                    </tbody>
                
                </table>
            </main>
        </section>
    );
}



