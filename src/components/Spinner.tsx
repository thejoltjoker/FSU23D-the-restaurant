import { FaPepperHot } from "react-icons/fa";

interface ISpinnerProps {
  children?: string;
}

const Spinner = ({ children }: ISpinnerProps) => {
  return (
    <div className="inline-flex items-center gap-2">
      <FaPepperHot className="animate-bounce text-vivid-orange" />
      {children}
    </div>
  );
};

export default Spinner;
