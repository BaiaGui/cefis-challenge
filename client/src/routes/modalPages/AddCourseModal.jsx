import { FilledButton, FramedButton } from "../../components/ButtonStyles";
import { ModalTemplate } from "../../components/ModalTemplate";
import { useEffect, useState } from "react";
import { InputSelection, InputText } from "../../components/InputComponents";
import { useNavigate, useParams } from "react-router-dom";


export function AddCourseModal({editMode}) {

    const navigate = useNavigate();
    const { courseId } = useParams();
    const [teachersData, setTeachersData] = useState();
    let teacherList;

    useEffect(()=>{
        const fetchData = async ()=>{
            const getResponse = await fetch('http://localhost:3000/user?type=teacher');
            const teachersData = await getResponse.json();
            setTeachersData(teachersData);
        }
        fetchData();
    },[])

    if(teachersData)
        teacherList = teachersData.map((teacher)=> <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson.courseDuration);
    
        if(editMode){
            const putResponse = await fetch(`http://localhost:3000/course/${courseId}`, {
                method: 'PUT',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    title: formJson.courseTitle,
                    duration: formJson.courseDuration,
                    teacherId: formJson.courseTeacherId
                })
            })
            if (putResponse.ok) {
                window.location.reload();
                navigate(-1);

              }else{
                throw new Error('Error submitting the form');
              }
        }
        else{
                const postResponse = await fetch('http://localhost:3000/course', {
                method: 'POST',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    title: formJson.courseTitle,
                    duration: formJson.courseDuration,
                    teacherId: formJson.courseTeacherId
                })
            })
            if (postResponse.ok) {
                navigate(-1);

              }else{
                throw new Error('Error submitting the form');
              }
        }
        
    }

    return (
        <ModalTemplate >
            <p className="font-bold uppercase text-lg">{editMode?'Editar Curso':'Cadastrar Curso'}</p>
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
                <InputText id="courseName" label="Curso" name="courseTitle" placeholder="Nome do curso..."/>
                <InputText id="courseDuration" label="Duração" name="courseDuration" placeholder="Qtd. horas"/>
                <InputSelection id="courseTeacher" name="courseTeacherId" label="Professor">
                    
                    {teacherList?teacherList:<option>Carregando...</option>}
                </InputSelection>
                <div className="flex justify-end items-end h-full">
                    <FilledButton>Confirmar</FilledButton>
                </div>
            </form>
        </ModalTemplate>
    );
}