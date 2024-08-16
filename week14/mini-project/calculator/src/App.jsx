import { useState } from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState("");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [operator, setOperator] = useState("+"); // Initialize with default operator

  // Operation functions
  const sum = (a, b) => a + b;
  const min = (a, b) => a - b;
  const dev = (a, b) => b === 0 ? "Cannot divide by zero" : a / b; // Handle division by zero
  const mul = (a, b) => a * b;

  const operations = {
    '+': sum,
    '-': min,
    '*': mul,
    '/': dev
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const numOne = Number(inputOne)
    const numTwo = Number(inputTwo)
    
    // Handle invalid input
    if (isNaN(numOne) || isNaN(numTwo)) {
      setOutput("Invalid input");
      return;
    }
    
    const operation = operations[operator];

    const result = operation(numOne, numTwo);
    setOutput(result);
  }

  return (
    <>
      <h2>Calculator</h2>
      <form onSubmit={handleSubmit}>

        <input type="number" value={inputOne} onChange={e=>setInputOne(e.target.value)}required id='numOne'/>
        <input type="number" value={inputTwo} onChange={e=>setInputTwo(e.target.value)} required id='numTwo'/>

        <select name="" id="" value ={operator} onChange={e=>setOperator(e.target.value)}>
          <option value="+" >+</option>
          <option value="-">-</option>r
          <option value="/">/</option>
          <option value="*">*</option>
        </select>

        <div>Output: {output} </div>
        <input type='submit' value="Calculate"/>

      </form>
    </>
  )
}

export default App
