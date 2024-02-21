import { useNavigate } from "react-router-dom";

const BookButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/booking");
  };

  return <button onClick={handleClick}>Book a table</button>;
};

export default BookButton;
