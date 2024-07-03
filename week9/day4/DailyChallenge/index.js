
const form = document.querySelector("form")
const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const data = {
        name: firstName.value,
        lastname: lastName.value
    }
    firstName.value = ""
    lastName.value = ""
    console.log(JSON.stringify(data))
    return JSON.stringify(data)
})