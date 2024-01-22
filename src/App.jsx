import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  //input should not be valid if duration < 1
  const inputIsValid = userInput.duration >= 1;

  //the "+" in front of newValue ensures it would be treated as a number, not as a string
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <h3 className="center">Please enter valid values for the input.</h3>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
