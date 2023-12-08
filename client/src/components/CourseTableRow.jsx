import trashIcon  from "../assets/trash.svg"
import pencilIcon  from "../assets/pencil.svg"
import { Link } from "react-router-dom";

export function CourseTableRow({courseData}){

    async function handleClick(){
        const deleteResponse = await fetch(`https://cefis-challenge.onrender.com/course/${courseData.id}`, {
            method: 'DELETE',
            headers: {"Content-Type":"application/json"},
        })
        if (deleteResponse.ok) {
            window.location.reload();
          }else{
            throw new Error('Error submitting the form');
          }
    };

    return (
        <tr className=" border-b border-x border-slate-300 hover:text-stone-900">
        <td className="py-6 px-5">{courseData.id}</td>
        <td>{courseData.title}</td>
        <td>{courseData.duration}</td>
        <td>{courseData.teacher_name}</td>
        <td>
            <div className="w-full h-full flex items-center justify-center gap-5">
            <button onClick={handleClick}><img src={trashIcon} alt="" /></button>
            <Link to={`editcourse/${courseData.id}`}><img src={pencilIcon} alt="" /></Link>
            </div>

        </td>
    </tr>
    );
}