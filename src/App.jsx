import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newvalue) {
    //now I want to update this change based on previous change
    //i want to update state based on previous state
    //when it changes all these 4 will be updated
    // updated state must depend on the old state
    //... copy old value into new object
    //inputiden will get string as a value
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newvalue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
