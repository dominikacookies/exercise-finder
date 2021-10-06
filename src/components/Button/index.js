import "./Button.css";

const Button = ({ label, size, mode, onClick }) => {
  return (
    <button
      className={[`button--${mode}`, `button--${size}`].join(" ")}
      onClick={onClick}
      data-testid="button"
    >
      {label}
    </button>
  );
};

export default Button;
