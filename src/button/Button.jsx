import PropTypes from 'prop-types';

export function Button({
  bg = "white",
  variant = "default",
  size = "md",
  text = "Add Your Button",
  disabled = false,
}) {
  const bgColors = {
    white: "bg-neutral-50",
    blue: "bg-twitter-blue",
  }

  const buttonSize = {
    sm: "",
    md: "",
    lg: "w-full"
  };
  const disabledButton = disabled ? "bg-neutral-500 cursor-not-allowed " : "";

  const variantStyle = {
    default: " px-6 py-2 rounded-4xl text-center font-inter text-base font-bold  hover:bg-neutral-200",
    outline: " px-6 py-2 rounded-4xl text-center font-inter text-base font-bold border border-blue-250 shadow-08160 backdrop-blur-xl text-twitter-blue",
  }

  let classes = `${buttonSize[size]} ${bgColors[bg]} ${variantStyle[variant]}`;

  return (
    <button className={classes} disabled={disabled}>
      {text}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["outline", "default"]),
  text: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Button;
