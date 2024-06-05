let addButton = document.querySelector(".new-task-button")
let newTask = document.querySelector(".new-task-input")
let listTasks = document.querySelector(".listTasks")
let clearButton = document.querySelector(".clear")

let tasks = []



function addTask (data){

    if(data.length === 0 || data === ""){
        return alert("Data is not valid, try again")
    }

    tasks.push(data)
    let createTask = document.createElement("div");
    createTask.textContent = data;
    listTasks.appendChild(createTask)
    console.log(tasks)
}


clearButton.addEventListener("click", (event)=>{
    event.preventDefault()
    listTasks.querySelectorAll("div").forEach((element)=>{
        element.remove()
    })
    tasks = []
})

addButton.addEventListener("click", (event)=>{
    event.preventDefault()
    addTask(newTask.value.trim())
    newTask.value = ""
})








