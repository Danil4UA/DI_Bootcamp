async function getData(){
    const res = await fetch("http://localhost:3000/api/products")
    const data = await res.json()
    render(data)
}
getData()

const render = arr => {
    const html = arr.map(item=>{
        return `<p>${item.name}</p>`
    })
    document.getElementById("root").innerHTML = html.join("")

}

const form = document.getElementById("form")
const input = document.getElementById("data")

form.addEventListener("submit",async (e)=>{
e.preventDefault()
const data = input.value
console.log(data)

const res = await fetch(`http://localhost:3000/api/search?name=${data}`)
const dat = await res.json()
console.log(dat)
render(dat)
})