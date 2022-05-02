import Wrapper from "./components/Wrapper";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import Screen from "./components/Screen";

// Base code, for now
const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        {/* When Button clicked, console log test prints */}
        <Button className="" value="0" conClick={() => {console.log("test")}} />
      </ButtonBox>
    </Wrapper>
  );
};

export default App;