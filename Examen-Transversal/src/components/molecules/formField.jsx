import "../../styles/molecules/formField.css";
import Label from "../atoms/label";
import Input from "../atoms/input";
import ErrorMessage from "../atoms/errorMessage";

const FormField = ({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
  error
}) => {
  return (
    <div className="form-field mb-3">
      <Label
        htmlFor={id}
        text={label}
      />

      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      <ErrorMessage
        message={error}
      />
    </div>
  );
};

export default FormField;