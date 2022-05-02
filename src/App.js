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
        {/* first row of buttons */}
        <Button className="" value="C" onClick={() => {console.log("CLEAR")}} />
        <Button className="" value="+-" onClick={() => {console.log("+-")}} />
        <Button className="" value="%" onClick={() => {console.log("%")}} />
        <Button className="" value="/" onClick={() => {console.log("Divide")}} />

        {/* second row of buttons */}
        <Button className="" value="7" onClick={() => {console.log("7")}} />
        <Button className="" value="8" onClick={() => {console.log("8")}} />
        <Button className="" value="9" onClick={() => {console.log("9")}} />
        <Button className="" value="X" onClick={() => {console.log("X")}} />

        {/* third row of buttons */}
        <Button className="" value="4" onClick={() => {console.log("4")}} />
        <Button className="" value="5" onClick={() => {console.log("5")}} />
        <Button className="" value="6" onClick={() => {console.log("6")}} />
        <Button className="" value="-" onClick={() => {console.log("-")}} />

        {/* forth row of buttons */}
        <Button className="" value="1" onClick={() => {console.log("1")}} />
        <Button className="" value="2" onClick={() => {console.log("2")}} />
        <Button className="" value="3" onClick={() => {console.log("3")}} />
        <Button className="" value="+" onClick={() => {console.log("+")}} />

        {/* fifth row of buttons */}
        <Button className="" value="0" onClick={() => {console.log("0")}} />
        <Button className="" value="." onClick={() => {console.log(".")}} />
        <Button className="equals" value="=" onClick={() => {console.log("=")}} />
        
      </ButtonBox>
    </Wrapper>
  );
};

export default App;