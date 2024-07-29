const form = document.getElementById("loginForm")

form.addEventListener("submit", async (e)=>{
    e.preventDefault()
    try {
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const data = {username, password}

        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)

        })
        
        const result = await response.json()

        document.getElementById("message").innerHTML = result.message

    } catch (error) {
        console.log(error)
    }
})