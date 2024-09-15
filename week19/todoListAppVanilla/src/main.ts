// Description:
// In this exercise, you will build a simple To-Do List Application using TypeScript. 
// You’ll create and manage tasks, store them in localStorage, 
// and dynamically update the DOM based on user actions. 
// By applying TypeScript’s features like classes and interfaces, 
// you’ll ensure the application is type-safe and maintainable. 
// The exercise will also introduce you to organizing projects with Vite.


// Types & Interfaces

interface Task {
  id: number
  task: string
  isCompleted: boolean
}
type AllTask = Task[]



const tasks: AllTask = []


const app = document.getElementById("app") as HTMLDivElement


// Function to Delete the task By Id
const deleteTask = (id: number) => {
  const foundIndex = tasks.findIndex(item=>{
    return item.id === id
  })
  tasks.splice(foundIndex, 1)
  displayTasks()
}

// Function to display all the tasks
const displayTasks = () => {
  const container = document.getElementById("container") as HTMLDivElement
  const tasksHTML = tasks.map(item=>{
    return `
      <p>${item.task}</p>
      <button class="delete-task" data-id="${item.id}">Delete</button>
    `
  })
  container.innerHTML = tasksHTML.join("")
  const deleteButtons = document.querySelectorAll(".delete-task")


  // Logic to add an event listenerres to the delete buttons
  deleteButtons.forEach((item)=>{
    item.addEventListener("click", (e)=>{
      e.preventDefault()
      const taskId = parseInt((item as HTMLButtonElement).dataset.id!)
      deleteTask(taskId)
    })
  })
  
}

// function to creacte task
const createTask = (value: string) => {
  const newTask: Task = {
    id: tasks.length,
    task: value,
    isCompleted: false
  }
  tasks.push(newTask)
}



const eventsListeners = () => {
  const input = document.getElementById("input") as HTMLInputElement
  const form = document.getElementById("form") as HTMLFormElement

  form?.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    let value = input.value
    if(value){
      createTask(value)
      input.value = ""
      displayTasks()
    }else{
      return
    }
  })
}

const createTodo = (): void => {

  const createContainer = document.createElement("div")
  createContainer.className = "container"

  createContainer.innerHTML = 
  
  `
    <form id="form">
      <input id="input" placeholder="Enter your task..." />
      <input type="submit" id="add" value="Add"/>
    </form>
    <div id="container"> </div>

  `
  app.appendChild(createContainer)
  eventsListeners()
}

// function to start the todo and create basis HTML
createTodo()

