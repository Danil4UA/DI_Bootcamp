import React from "react";
import { useReducer, useRef, createContext } from "react";
import "./App.css"
import TaskLists from "./Components/TasksList";
import { v4 as uuidv4 } from 'uuid';
// createContext / useContext
// useContext(TaskContext)
// useContext(AppContext)


export const TaskContext = createContext()
export const AppContext = createContext()

const initialState = {
  tasks: [],
  active: true
}


// actions constant types

const ADD_TASK = "add_task"
export const REMOVE_TASK = "remove_task"

// state is the initial state, 
// actions => function and the object 
const taskReduces = (state, action) => {
  console.log(action)
  if(action.type === ADD_TASK){
    const newTasks = [...state.tasks];
    newTasks.push({
      id: uuidv4(),
      name: action.payload, // we send in the dispatch
      active: true
    })
    return {...state, tasks: newTasks}
  }else if(action.type === REMOVE_TASK){
    const filterTasks = state.tasks.filter((item)=>item.id !== action.id)
    return {...state, tasks: filterTasks}
  }
  return state
}

function App (){
  const [state, dispatch] = useReducer(taskReduces, initialState) 
  const taskInputRef = useRef()

  const username = useRef("daniil")

  const addTask = () => {
    const value = taskInputRef.current.value
    dispatch({type: ADD_TASK, payload: value})
    taskInputRef.current.value = ""
  }
  const changeUser = () => {
    const value = taskInputRef.current.value
    username.current = value
    console.log(username)
  }
  // state => {tasks: [], active: true}
  return (
    <TaskContext.Provider value={{state, dispatch}}>

      <h2>Task Manager</h2>
      <h3>{username.current}</h3>
      <input ref={taskInputRef} placeholder="add task" />
      <button onClick={addTask}>Add Task</button>
      <button onClick={()=>changeUser()}>Change Name</button>
      <TaskLists></TaskLists>

    </TaskContext.Provider>
  )
}

export default App