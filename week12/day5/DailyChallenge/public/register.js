const form = document.getElementById("registerForm")

form.addEventListener("submit", async (e)=>{
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const data = {username, password}
    
    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)

    })

    const result = await response.json()
    console.log(result)
    const name = result.username
    document.getElementById("message").innerHTML = `Hello ${name}, your account is now Created !`
})

//     .then((res)=>{
//         res.json()
//         // document.getElementById("message").innerHTML = `Hello ${username}, your account is now Created !`
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })