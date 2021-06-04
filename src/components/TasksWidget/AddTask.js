import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddButtonIcon from '../UI/AddButtonIcon';

const AddTask = ({ label, onAdd }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <div className="task__add">
      <form className=" task__form" autoComplete="off" onSubmit={onSubmit}>
        <input
          type="text"
          className="task__form-input bg-none form-control"
          placeholder=" "
          id="taskInput"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <label htmlFor="taskInput">{label}</label>
      </form>
      <AddButtonIcon onAdd={onSubmit} isVisible={text.length > 0 && true} />
    </div>
  );
};

AddTask.defaultProps = { label: 'Add A New Task...' };
AddTask.propTypes = { label: PropTypes.string };

export default AddTask;
