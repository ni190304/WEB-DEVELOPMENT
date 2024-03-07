import React, {useState} from 'react';
import './App.css';

function App() {
  const[count , setcount] = useState(0);

  function increase() {
    setcount(count + 1);
  }

  function decrease() {
    setcount(count - 1);
  }

  return (
    <div className="main">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
