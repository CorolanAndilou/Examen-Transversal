const Select = ({
  id,
  value,
  onChange,
  options
}) => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="form-select"
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;