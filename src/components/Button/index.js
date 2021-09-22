const Button = ({ label, size, mode, onClick }) => {
  return (
    <button
      className={[`button--${mode}`, `button--${size}`].join(" ")}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
