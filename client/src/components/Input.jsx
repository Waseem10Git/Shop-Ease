
function Input ({ id, type  ='text', label, value, handleChange, ...rest }) {
    return (
        <div className={"mb-3"}>
            <label className={"form-label"} htmlFor={id}>{label}</label>
            <input className={"form-control"} type={type} name={id} value={value} id={id}
                   onChange={handleChange} {...rest}/>
        </div>
    )
}

export default Input