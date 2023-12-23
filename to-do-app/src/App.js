import { useState } from 'react';
import React from 'react';

export default function App () {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>To-Do App</h1>
      <ToDoList />
    </div>
  );
};

const ToDoList = () => {

  const [todoItems, setTodoItems] = useState([
    { id: 1, text: "Read SpringBoot", completed: false },
    { id: 2, text: "Complete assignments", completed: false },
    { id: 3, text: "Prepare breakfast", completed: false },
    { id: 4, text: "Sleep for 2 hours", completed: false },
    { id: 5, text: "Take a shower", completed: false }
  ]);

  const toggleCompleted = (id) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };


  const removeCompleted = () => {
    setTodoItems((prevItems) => prevItems.filter((item) => !item.completed));
  };

  const clearAllTasks = () => {
    setTodoItems([]);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todoItems.length === 0 ? (
          <p style={{ fontStyle: 'italic' }}>Nothing to do buddy. Sleep!</p>
        ) : (
          todoItems.map((item) => (
            <ToDoItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              toggleCompleted={toggleCompleted}
            />
          ))
        )}
      </ul>
      {todoItems.some((item) => item.completed) && (
        <button onClick={removeCompleted}>Remove Completed</button>
      )}
    </div>
  );
};

const ToDoItem = ({ id, text, completed, toggleCompleted }) => {
  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
      onClick={() => toggleCompleted(id)}
    >
      {text}
    </li>
  );
};





