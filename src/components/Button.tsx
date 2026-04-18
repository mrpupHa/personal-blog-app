import type { ButtonProps } from "../../types/Button";

const variantStyles: Record<string, string> = {
  filled: "bg-black hover:bg-brown-200 border-red text-body-1",
  outlined:
    "bg-white text-black border border-gray-400 hover:border-gray-600 active:border-gray-800 text-body-1",
  text: "bg-transparent text-black underline hover:text-gray-600 active:text-gray-800 text-body-1",
};

function Button({
  children,
  onClick,
  variant = "filled",
  disabled = false,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-[40px] py-[12px] rounded-full cursor-pointer transition-colors
        ${variantStyles[variant]}
        ${disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
