import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function NavBarMenu(){
    const [userData, setUserData] = useState();
    const userId = sessionStorage.getItem('loggedUser');
    
    //const userName = JSON.parse(userData).name;

    useEffect(()=>{
        fetch(`http://localhost:3000/user/${userId}`)
        .then(res => res.json())
        .then(data => {
          setUserData(data[0]);
        })
    },[])

    if(userData)
        sessionStorage.setItem("userData", JSON.stringify(userData))
    

    return (
        <nav className="flex w-full h-16 justify-between items-center px-20 border-b border-stone-700 absolute overflow-x-hidden">
            <div>
                <p className="text-sm">Logado com:</p>
                <p className="font-bold">{userData?userData.name:''}</p>
            </div>
            <div className="flex gap-5 text-stone-500">
                <Link to="/"><p className="hover:text-black">Cursos</p></Link>
                <Link to="/userpanel"><p className="hover:text-black">Painel Admin</p></Link>
            </div>
        </nav>
    );
}