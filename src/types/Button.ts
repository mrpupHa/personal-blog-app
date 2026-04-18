export type ButtonVariant = "filled" | "outlined" | "text";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant; // filled | outlined | text
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};
