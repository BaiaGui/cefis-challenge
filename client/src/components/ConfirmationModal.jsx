import { useNavigate } from "react-router-dom"

export function ConfirmationModal({children}){
    let navigate = useNavigate();

    function dismissModal() {
      navigate(-1);
      }
    

    return (
        <div className=" w-screen h-screen absolute flex items-center justify-center">
            <div className=" w-full h-full bg-black/80  flex flex-col items-center justify-center" onClick={dismissModal}>
        
            </div>
            <aside className="absolute bg-white w-2/4 h-2/3 p-14 self-center justify-self-center">
                {children}
            </aside>

        </div>
    )
}