import { FaPepperHot } from "react-icons/fa";

interface ISpinnerProps {
  chiliColor?: string;
  children?: string;
}

const Spinner = ({ chiliColor = "vivid-orange", children }: ISpinnerProps) => {
  return (
    <div className="inline-flex items-center gap-2">
      <FaPepperHot className={`animate-bounce text-${chiliColor}`} />
      {children}
    </div>
  );
};

export default Spinner;
