import { getValue } from "@testing-library/user-event/dist/utils";
import "./Button.css";

const Button = ({ className, value, onClick }) => {
  // display value on button
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;