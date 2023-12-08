export function InputText({id, label, placeholder, className, name, onChange, value}){
    return (
        <>
        <label className="font-bold" htmlFor={id}>{label}</label>
        <input type="text" id={id} value={value} onChange={onChange} name={name} placeholder={placeholder} required className={`border border-gray-500 p-3 outline-none ${className}`}/>
        </>
    );
}

export function InputTextNoLabel({id, label, placeholder, className, name}){
    return (
        <>
        <label className="font-bold hidden" htmlFor={id}>{label}</label>
        <input type="text" id={id} name={name} placeholder={placeholder} required className={`border border-gray-500 p-3 outline-none ${className}`}/>
        </>
    );
}

export function InputSelection({id, label, children, className, name, onChange, value}){
    return (
        <div className={`flex flex-col ${className}`}>
        <label className="font-bold mb-1" htmlFor={id}>{label}</label>
        <select id={id} required onChange={onChange} name={name} value={value} className="border border-gray-500 p-3 mb-8 outline-none">
            {children}
        </select>
        </div>
    );
}