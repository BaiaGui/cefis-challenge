import { useEffect, useState } from "react";
import { FilledButton } from "../components/ButtonStyles";
import { InputSelection } from "../components/InputComponents";
import { Title } from "../components/Title";

export function LoginPage({setLoggedUser}){

    const [users, setUsers]= useState();
    const [userType, setUserType] = useState('teacher');
    const [selectedUser, setSelecteduser] = useState();
    let userList;

    useEffect(()=>{
        fetch(`http://localhost:3000/user?type=${userType}`)
        .then(res =>{
            return res.json()
        })
        .then((data)=>{
            setUsers(data);
        })
    },[userType]);
    
    const handleSelectionChange = (userId)=>{
        setSelecteduser(userId);
    }

    const handleSubmit = ()=>{
        sessionStorage.setItem("loggedUser", selectedUser)
        setLoggedUser(true);
    }
    
    

    return (
        <main className="flex flex-col items-center justify-center w-full min-h-screen">
                            
            <form className="flex flex-col w-1/3 border border-stone-400 p-10">
                <Title>Login</Title>

                <div className="flex my-28 gap-1 ">
                <InputSelection label={"Tipo"} value={userType} onChange={e => setUserType(e.target.value)}>
                        <option value="teacher">Professor</option>
                        <option value="student">Aluno</option>
                    </InputSelection>

                    <InputSelection label={"Nome"} value={selectedUser} className="w-full" onChange={e => handleSelectionChange(e.target.value)}>
                    {users && <RenderUserList users={users} />}
                    </InputSelection>
                </div>

                <div className=" flex justify-end">
                    <FilledButton onClick={handleSubmit}>Entrar</FilledButton>
                </div>
            </form>

        </main>
    );
}

function RenderUserList({users}){

    const userList = users.map(user => <option key={user.id} value={user.id}>{user.name}</option>);

    return (
        <>
        <option value="null"></option>
        {userList}
        </>
    );
}