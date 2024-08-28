import { useReducer, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; 
import './App.css'

const ADD_TASK = "add-task";
const COMPLETE_TASK = "complete-task";
const EDIT_TASK = "edit-task";
const SORT_TASKS = "sort-tasks";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTodo = {
        id: uuidv4(),
        text: action.text,
        status: "active",
      };
      return [...state, newTodo];

    case COMPLETE_TASK:
      return state.map(item => 
        item.id === action.id ? { ...item, status: "completed" } : item
      );

    case EDIT_TASK:
      return state.map(item => 
        item.id === action.id ? { ...item, text: action.newText } : item
      );

    case SORT_TASKS:
      return [...state].sort((a, b) => 
        a.status === "completed" && b.status === "active" ? 1 : -1
      );

    default:
      return state;
  }
}

const initialState = [];

function App() {
  const inputRef = useRef();
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (value) {
      dispatch({ type: ADD_TASK, text: value });
      inputRef.current.value = "";
    }
  }

  const handleComplete = (id) => {
    dispatch({ type: COMPLETE_TASK, id });
  }

  const handleEditClick = (id, currentText) => {
    setEditingTaskId(id);
    setEditText(currentText);
  }

  const handleEditSubmit = (id) => {
    dispatch({ type: EDIT_TASK, id, newText: editText });
    setEditingTaskId(null); // Close the edit mode
  }

  const handleSortTasks = () => {
    dispatch({ type: SORT_TASKS });
  }

  return (
    <>
      <h2>Enhanced Task Manager</h2>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Enter a task" />
      </form>

      <button onClick={handleSortTasks}>Sort completed tasks</button>

      <div>
        {state.map(item => (
          <div key={item.id}>
            {editingTaskId === item.id ? (
              <>
                <input 
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder='Edit your task' 
                />
                <button onClick={() => handleEditSubmit(item.id)}>Save</button>
              </>
            ) : (
              <p>
                {item.text} - Status: {item.status}
                {item.status === "active" && (
                  <>
                    <button onClick={() => handleComplete(item.id)}>Complete</button>
                    <button onClick={() => handleEditClick(item.id, item.text)}>Edit</button>
                  </>
                )}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;