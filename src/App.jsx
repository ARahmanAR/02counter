import { useState } from 'react';
import './App.css';

function App() {

  const [counter, chaiCounter] = useState(0)

  // let counter = 5;
  const addValue = () => {
    // counter += 1;
    // console.log(counter);
    chaiCounter(counter + 1);
  }

  const removeValue = () => {
    if (counter > 0) {
      const newCounter = counter - 1;
      chaiCounter(newCounter);
      if( newCounter === 10){
        alert("Counter value is back to 10");
      }
    }else {
      alert("Counter value cannot be less than zero");
    }
  }

  return (
    <>
      <h1>This is counter app</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}
export { App }; // * here default not working because index.jsx use named import

