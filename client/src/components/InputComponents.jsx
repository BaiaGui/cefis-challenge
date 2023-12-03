export function InputText({id, label, placeholder}){
    return (
        <>
        <label className="font-bold" htmlFor={id}>{label}</label>
        <input type="text" id={id} placeholder={placeholder} required className="border border-gray-500 p-3  mb-8"/>
        </>
    );
}

export function InputSelection({id, label, children}){
    return (
        <>
        <label className="font-bold mb-1" htmlFor={id}>{label}</label>
        <select id={id} required className="border border-gray-500 p-3 mb-8">{children}</select>
        </>
    );
}