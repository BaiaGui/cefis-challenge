import trashIcon  from "../assets/trash.svg"
import pencilIcon  from "../assets/pencil.svg"
import { Link } from "react-router-dom";

export function UserTableRows({userData}){

    async function handleClick(){
        
    };

    return (
        <tr className=" border-b border-x border-slate-300 hover:text-stone-900">
        <td className="py-6 px-5">{userData.id}</td>
        <td>{userData.name}</td>
        <td>{userData.type}</td>
        <td>
            <div className="w-full h-full flex items-center justify-center gap-5">
            <button onClick={handleClick}><img src={trashIcon} alt="delete" /></button>
            <Link to={`edituser/${userData.id}`}><img src={pencilIcon} alt="edit" /></Link>
            </div>

        </td>
    </tr>
    );
}