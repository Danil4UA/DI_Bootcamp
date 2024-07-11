//Elements
const container = document.getElementById("container")
const button = document.querySelector("button")

button.addEventListener("click",(e)=>{
    e.preventDefault()
    getPersen()
    
})

//the name, height, gender, birth year, and home world of the character.
async function getPersen(){
    try{
        container.innerHTML = `<i class="fa-solid fa-spinner fa-spin-pulse"></i>`
        const randomPersonId = Math.floor(Math.random() * 83 + 1)
        let url = `https://www.swapi.tech/api/people/${randomPersonId}`

        const res = await fetch(url)
        const data = await res.json()
        const result = await data.result

        if (!result) {
            throw new Error("Character not found");
        }
        
        const {name, height, gender, birth_year, homeworld} = result.properties
        
        const homeRes = await fetch(homeworld)
        const homeData = await homeRes.json()
        const homeResult =  await homeData.result

        if (!homeResult) {
            throw new Error("Home world not found");
        }

        const homeName = await homeResult.properties.name

        const dataBlock = `<div id="info">
            <h3>${name}</h3>
            <p>Height: ${height}</p>
            <p>Gender: ${gender}</p>
            <p>Birth Year: ${birth_year}</p>
            <p>Home World: ${homeName}</p>
            </div>`
        container.innerHTML = dataBlock
        
    }catch(e){
        console.log("Error=> ", e)
        container.innerHTML = `<p>Error fetching data. Please try again.</p>`;
    }
}
