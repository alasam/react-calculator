import "./ButtonBox.css";

const ButtonBox = ({ children }) => {
  // holds all Buttons
  return <div className="buttonBox">
    {children}
  </div>
};

export default ButtonBox;