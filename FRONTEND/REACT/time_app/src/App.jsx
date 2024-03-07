import React, {useState} from 'react';
import './App.css';

function App() {

  const now = new Date().toLocaleTimeString();

  const [time , setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(updateTime, 1000);


  return (
    <div className="App">
      <h1>{time}</h1>
      {/* <button onClick={updateTime}>Get Time</button> */}
    </div>
  );
}

export default App;
