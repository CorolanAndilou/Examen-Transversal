import "../../styles/atomics/button.css";

const Button = ({
  text,
  type = "button",
  onClick,
  className = "",
  disabled = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-primary app-button ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;