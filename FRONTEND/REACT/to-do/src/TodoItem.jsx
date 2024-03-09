import React from 'react';

function TodoItem(props) {
  function handleClick() {
    props.onCheckboxChange(props.id);
  }

  return (
    <div className='item'>
      <input type="checkbox" className='checkbox-label' id={props.id} onClick={handleClick} checked={props.isChecked} />
      {props.text}
    </div>
  );
}

export default TodoItem;