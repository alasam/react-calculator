import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import Screen from "./components/Screen";

// Base code, for now
const App = () => {
  let [calc, setCalc] = useState(
    {
      // sign chosen
      sign: "",
      // value entered
      num: 0,
      // value calculated, set to 1 for testing
      answer: 1,
    }
  );

  // Function for clicking clear button
  const clearClickHandler = () => {
    setCalc(
      {
        ...calc,
        sign: "",
        num: 0,
        answer: 0,
      }
    )
  }

  // Function for clicking plus/minus button
  const plusMinusClickHandler = () => {
    setCalc(
      {
        ...calc,
        sign: "",
        num: calc.num ? calc.num * -1 : 0,
        answer: calc.answer ? calc.answer * -1 : 0,
      }
    )
  }

  // Function for clicking percent button
  const percentClickHandler = () => {
    let numCheck = calc.num ? parseFloat(calc.num) : 0;
    let answerCheck = calc.answer ? parseFloat(calc.answer) : 0;

    setCalc(
      {
        ...calc,
        sign: "",
        num: numCheck / Math.pow(100, 1),
        answer: answerCheck / Math.pow(100, 1),
      }
    )
  }

  // Function for clicking operations button
  const operationClickHandler = (value) => {
    setCalc(
      {
        ...calc,
        sign: value.target.innerHTML,
        num: 0,
        answer: !calc.answer && calc.num ? calc.num : calc.answer,
      }
    )
    console.log(value.target.innerHTML);
  }

  return (
    <Wrapper>
      {/* Screen shows either value entered or calculated answer */}
      <Screen value={calc.num ? calc.num : calc.answer} />
      <ButtonBox>
        {/* first row of buttons */}
        <Button className="" value="C" onClick={clearClickHandler} />
        <Button className="" value="+-" onClick={plusMinusClickHandler} />
        <Button className="" value="%" onClick={percentClickHandler} />
        <Button className="" value="/" onClick={operationClickHandler} />

        {/* second row of buttons */}
        <Button className="" value="7" onClick={() => { console.log("7") }} />
        <Button className="" value="8" onClick={() => { console.log("8") }} />
        <Button className="" value="9" onClick={() => { console.log("9") }} />
        <Button className="" value="X" onClick={operationClickHandler} />

        {/* third row of buttons */}
        <Button className="" value="4" onClick={() => { console.log("4") }} />
        <Button className="" value="5" onClick={() => { console.log("5") }} />
        <Button className="" value="6" onClick={() => { console.log("6") }} />
        <Button className="" value="-" onClick={operationClickHandler} />

        {/* forth row of buttons */}
        <Button className="" value="1" onClick={() => { console.log("1") }} />
        <Button className="" value="2" onClick={() => { console.log("2") }} />
        <Button className="" value="3" onClick={() => { console.log("3") }} />
        <Button className="" value="+" onClick={operationClickHandler} />

        {/* fifth row of buttons */}
        <Button className="" value="0" onClick={() => { console.log("0") }} />
        <Button className="" value="." onClick={() => { console.log(".") }} />
        <Button className="equals" value="=" onClick={() => { console.log("=") }} />

      </ButtonBox>
    </Wrapper>
  );
};

export default App;