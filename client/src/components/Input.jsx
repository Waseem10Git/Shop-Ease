function Input({ id, type = "text", label, value, onChange, ...rest }) {
  return (
    <div className={"mb-3"}>
      <label className={"form-label"} htmlFor={id}>
        {label}
      </label>
      <input
        className={"form-control"}
        type={type}
        name={id}
        value={value}
        id={id}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

export default Input;
