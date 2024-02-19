interface IButtonProps {
  bgColor: string;
  textColor: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ bgColor, textColor, children, onClick }: IButtonProps) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} rounded-full px-6 py-1.5 shadow-button-${bgColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
