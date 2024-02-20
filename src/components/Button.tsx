interface IButtonProps {
  bgColor: string;
  textColor: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button = ({
  bgColor,
  textColor,
  children,
  onClick,
  type = undefined,
  disabled = false,
}: IButtonProps) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} rounded-full px-6 py-1.5 shadow-button-${bgColor} disabled:shadow-button-disabled h-fit shrink grow whitespace-nowrap disabled:bg-stone-500`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
