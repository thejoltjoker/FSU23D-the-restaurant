import { FaPepperHot } from "react-icons/fa";

interface ISpinnerProps {
  chiliColor?: string;
  textColor?: string;
  children?: string;
}

const Spinner = ({
  chiliColor = "vivid-orange",
  textColor = "dark-red",
  children,
}: ISpinnerProps) => {
  return (
    <div className="inline-flex items-center gap-2">
      <FaPepperHot className={`animate-bounce text-${chiliColor}`} />
      <span className={`text-${textColor}`}>{children}</span>
    </div>
  );
};

export default Spinner;
