import "./Wrapper.css";

const Wrapper = ({children}) => {
  // Holds all children components
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;