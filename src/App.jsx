import Header from './component/Header';
import { useState } from 'react';
import UserInput from './component/UserInput';
import Result from './component/Result';
function App() {
  const [userInput, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isInputValid=userInput.duration>=1;
  function handleChange(inputIdentifier, newValue) {
    setInput((prevInput) => {
      return { ...prevInput, [inputIdentifier]: +newValue };
    });
  }
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!isInputValid&& <p className='center'>Please enter duration greater than zero.</p>}
    {isInputValid&&<Result input={userInput}/>}
    </>
    
  )
  
}

export default App
