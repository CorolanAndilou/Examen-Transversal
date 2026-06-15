const Input = ({
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder,
  required = false
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="form-control"
    />
  );
};

export default Input;