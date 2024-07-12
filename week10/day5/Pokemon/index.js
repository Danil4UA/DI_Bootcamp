//Elements
const pokemonInfo = document.getElementById("pokemon-info")
const pokemonImage = document.getElementById("pokemon-image")
const buttonRandom = document.getElementById("button-random")
const buttonNext = document.getElementById("button-next")
const buttonPrevious = document.getElementById("button-previous")

buttonRandom.addEventListener("click", (e)=>{
    e.preventDefault()
    getRandomPokemon()
})
buttonNext.addEventListener("click", async (e)=>{
    e.preventDefault()
    navigatePokemon(1);
})
buttonPrevious.addEventListener("click", (e)=>{
    e.preventDefault()
    navigatePokemon(-1);
})

function createPokemonHtml(data){

    const {name, id, height, weight} = data
    const image = data.sprites.front_default

    const htmlImage = `<img src="${image}">`
    const htmlInfo = `<div>
                        <h3>${name}</h3>
                        <p id="pokemon-id">Pokemon id: ${id}</p>
                        <p>Height: ${height}</p>
                        <p>Weight: ${weight}</p>
                    </div>`

    pokemonInfo.innerHTML = htmlInfo
    pokemonImage.innerHTML = htmlImage
}

async function getPokemon(pokemonId){
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${parseInt(pokemonId)}`
        const res = await fetch(url)
        if(!res.ok) throw new Error("Cannot acces the API")
        const data = await res.json()

        createPokemonHtml(data)
    }catch(err){
        console.error("Error => ", err);
        pokemonInfo.innerHTML = `<p>Error fetching Pokémon data. Please try again.</p>`;
    }
}

async function getRandomPokemon(){
    try{
        clearPokemonInfo()

        const randomPokemon = Math.floor(Math.random()* 541 + 1);
        await getPokemon(randomPokemon)
    }catch(err){
        console.log("Error=> ", err)
    }
}


async function navigatePokemon(offset) {
    try {
        const idString = document.getElementById("pokemon-id");
        if (!idString) throw new Error("You didn't create a Pokémon");

        let pokemonId = parseInt(idString.textContent.match(/\d+/)[0]) + offset;
        if (pokemonId < 1) pokemonId = 1;
        await getPokemon(pokemonId);
    } catch (err) {
        console.error("Error => ", err);
    }
}

function clearPokemonInfo() {
    pokemonInfo.innerHTML = "Loading...";
    pokemonImage.innerHTML = "";
}