// App.jsx
import React, { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';

function App() {
  const [inputText, setInputText] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem() {
    setItems(prevItems => [...prevItems, inputText]);
    setInputText("");
  }

  function deleteItem(ids) {
    setItems(prevItems => prevItems.filter((item, index) => !ids.includes(index)));
    setCheckedItems([]); // Clear checked items after deletion
  }

  function handleCheckboxChange(itemId) {
    setCheckedItems(prevCheckedItems => {
      if (prevCheckedItems.includes(itemId)) {
        // If item is already checked, uncheck it
        return prevCheckedItems.filter(id => id !== itemId);
      } else {
        // If item is not checked, check it
        return [...prevCheckedItems, itemId];
      }
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-do</h1>
      </div>

      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      <div>
        {items.map((todoItem, index) => (
          <TodoItem key={index} id={index} text={todoItem} isChecked={checkedItems.includes(index)} onCheckboxChange={handleCheckboxChange} />
        ))}
      </div>

      {items.length > 0 && (
        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-danger" style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem 1rem' }} onClick={() => deleteItem(checkedItems)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

