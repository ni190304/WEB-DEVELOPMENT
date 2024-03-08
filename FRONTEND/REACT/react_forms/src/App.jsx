import React, { useState } from 'react';
import './App.css';

function App() {
  const [fullName, setName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    if (name === "fName") {
      setName({ fName: value, lName: fullName.lName });
    } else if (name === "lName") {
      setName({ lName: value, fName: fullName.fName });
    }
  }



  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input
          type="text"
          name='fName'
          placeholder="First name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          type="text"
          name='lName'
          placeholder="Last name"
          onChange={handleChange}
          value={fullName.lName}

        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
