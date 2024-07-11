//Elements

const firstSelect = document.getElementById("fCurrency") 
const secondSelect = document.getElementById("sCurrency") 
const amountInput = document.getElementById("amount")
const form = document.querySelector("form")
const output = document.getElementById("output")
// const convert = document.getElementById("convert")

form.addEventListener("submit", async (e)=>{
    e.preventDefault()
    await getCurrency()
})


async function getCurrency(){
    try{
        output.innerHTML = ""
        const fCurr = firstSelect.value;
        const sCurr = secondSelect.value;
        const amount = amountInput.value;

        if(isNaN(amount) || amount <= 0){
            throw new Error("The amount is not valid")
        }

        const url = `https://v6.exchangerate-api.com/v6/bde6651787fac4d435772161/pair/${fCurr}/${sCurr}`
        const res = await fetch(url)
        if (!res.ok) throw new Error("Failed to fetch exchange rate");

        const data = await res.json()
        const subResult = await data.conversion_rate;
        const result = (subResult * amount).toFixed(4)
        
        const html = `<p class="result">${result} ${sCurr}</p>`
        output.innerHTML = html

    }catch(e){
        console.log("Error => ", e)
        output.innerHTML = `<p class="error">${e.message}</p>`;
    }

}

async function addOptions(){
    try{
        const url = `https://v6.exchangerate-api.com/v6/bde6651787fac4d435772161/codes`
        const res = await fetch(url)
        if (!res.ok) throw new Error("Failed to fetch exchange rate");
        const data = await res.json()
    
        const htmlOptions = () => {
            const arrOptions = data.supported_codes.map(item=>{
                return (`<option value="${item[0]}">${item[0]} ${item[1]}</option>`)
            })
            return arrOptions
        }
        firstSelect.innerHTML = htmlOptions().join("")
        secondSelect.innerHTML = htmlOptions().join("")
    }catch(e){
        console.log("Error=> ", e)
        output.innerHTML = `<p class="error">${e.message}</p>`;
    }
    
}

addOptions()