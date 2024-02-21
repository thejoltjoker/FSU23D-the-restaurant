import { useNavigate } from "react-router-dom";

const OrderButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <button
      className="rounded-full bg-vivid-orange p-3 px-4 py-2 text-white shadow-md"
      onClick={handleClick}
    >
      Order Here
    </button>
  );
};

export default OrderButton;
