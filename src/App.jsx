import { useState } from "react";
import UserInput from "./components/User Input/UserInput"
import Results from "./components/Results/Results";

function App() {

  const [userInput, setUserInput] = useState({
    monthlyInvestment: 1000,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }

  const inputIsValid = userInput.duration > 0 && userInput.monthlyInvestment > 0 && userInput.expectedReturn > 0;

  return (
    <>
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a valid data</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
