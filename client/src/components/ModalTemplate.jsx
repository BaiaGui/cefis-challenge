import { useNavigate } from "react-router-dom"

export function ModalTemplate({children}){
    let navigate = useNavigate();

    function dismissModal() {
      navigate(-1);
      }
    

    return (
        <div className="absolute z-50 w-screen h-screen bg-black/80  flex items-center justify-center" onClick={dismissModal}>
            <aside className="bg-white w-2/4 h-2/3 p-14">
                {children}
            </aside>

        </div>
    )
}