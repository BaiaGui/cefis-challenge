import { SidebarMenu } from "../components/SidebarMenu.jsx";
import { FilledButton } from "../components/ButtonStyles.jsx";
import { Title } from "../components/Title.jsx";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserTableRows } from "../components/UserTableRows.jsx";

export function UserPanel(){

    const [usersData, setUsersData] = useState();
    let usersList;

    useEffect(()=>{
        const fetchData = async() => {
            const usersResponse = await fetch('http://localhost:3000/user');
            const usersData = await usersResponse.json();
            setUsersData(usersData);
        }
        fetchData();
    },[])
    
    if(usersData){
        usersList = usersData.map((user)=> <UserTableRows key={user.id} userData={user}/>)
    }


    return(
        <section className="flex">
            <SidebarMenu/>
            <main className="w-full min-h-screen px-32 pb-10 pt-36 ml-72">
                <div className="flex justify-between items-center mb-5">
                <Title>Usuários</Title>
                <Link to="newuser">
                    <FilledButton>+ Novo Usuário</FilledButton>
                </Link>
                
                </div>
                <table className="table-auto w-full text-left text-stone-500">
                    <thead>
                    <tr className="bg-stone-900 text-white border-x border-stone-900">
                        <th className="py-5 px-5">ID</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th></th>
                
                    </tr>
                    </thead>
                    <tbody>
                        {usersList}
                    </tbody>

                </table>
            </main>
            <Outlet/>
        </section>
    );
}