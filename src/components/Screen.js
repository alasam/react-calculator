import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { Textfit} from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    // Display value, with max font size of 70
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;
