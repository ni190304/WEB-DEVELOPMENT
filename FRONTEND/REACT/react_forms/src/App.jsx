import React, { useState } from 'react';
import './App.css';

function App() {
  const [fullName, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setContact(prevValue => ({ ...prevValue, [name]: value }));
  }



  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <p>{fullName.email}</p>
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
        <input
          type="text"
          name='email'
          placeholder="Email"
          onChange={handleChange}
          value={fullName.email}

        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
