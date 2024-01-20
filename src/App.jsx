import { useState } from "react";
import Button from "./components/Toggle Button/ToggleButton";
import UserInputMonthly from "./components/User Input/UserInputMonthly";
import UserInputLumpsum from "./components/User Input/UserInputLumpsum";
import MonthlyResults from "./components/Results/MonthlyResults";
import LumpsumResult from "./components/Results/LumpsumResults";

function App() {
  const [userInputMonthly, setUserInputMonthly] = useState({
    monthlyInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });
  const [selectedSection, setSelectedSection] = useState("monthly");

  function handleMonthlyChange(inputIdentifier, newValue) {
    setUserInputMonthly((prevUserInputMonthly) => {
      return {
        ...prevUserInputMonthly,
        [inputIdentifier]: +newValue,
      };
    });
  }

  function handleSection(value) {
    setSelectedSection(value);
  }

  const isMonthlyInputValid =
  userInputMonthly.monthlyInvestment > 0 &&
  userInputMonthly.expectedReturn > 0 &&
  userInputMonthly.duration > 0;

  const [userInputLumpsum, setUserInputLumpsum] = useState({
    lumpsumAmount: 100000,
    expectedReturn: 6,
    duration: 10
  })

  function handleLumpsumChange(inputIdentifier, newValue) {
    setUserInputLumpsum((prevUserInputLumpsum) => {
      return {
        ...prevUserInputLumpsum,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const isLumpsumInputValid =
    userInputLumpsum.lumpsumAmount > 0 &&
    userInputLumpsum.expectedReturn > 0 &&
    userInputLumpsum.duration > 0;

  return (
    <>
      <Button handleSection={handleSection} />
      <div style={{ display: selectedSection === "monthly" ? "" : "none" }}>
        <UserInputMonthly
          userInputMonthly={userInputMonthly}
          onChange={handleMonthlyChange} />
        {!isMonthlyInputValid && <p className="center">Please enter valid data</p>}
        {isMonthlyInputValid && <MonthlyResults input={userInputMonthly} />}
      </div>
      <div style={{ display: selectedSection === "lumpsum" ? "" : "none" }}>
        <UserInputLumpsum
          userInputLumpsum={userInputLumpsum}
          onChange={handleLumpsumChange} />
          {!isLumpsumInputValid && <p className="center">Please enter valid data</p>}
        {isLumpsumInputValid && <LumpsumResult input={userInputLumpsum} />}
      </div>
    </>
  );
}

export default App;
