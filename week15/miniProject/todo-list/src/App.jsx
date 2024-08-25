import React, { useState, useRef } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = {
      id: Date.now(), // Use timestamp as a unique ID
      todo: inputRef.current.value,
    };
    setTodoList([...todoList, newToDo]);
    inputRef.current.value = "";
  };

  const handleClick = (id) => {
    // Create a new array with the filtered to-dos
    const updatedTodoList = todoList.filter(item => item.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <>
      <div id="root">
        <h1>To-do List</h1>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" />
          <button type="submit">Add To-Do</button>
        </form>
        <div id="container">
          {todoList.map((item) => (
            <div key={item.id}>
              <p onClick={() => handleClick(item.id)}>{item.todo}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;