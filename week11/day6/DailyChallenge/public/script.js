function getRandomEmoji(){
    fetch("http://localhost:3000/emojis")
        .then((res)=>res.json())
        .then((data)=>{
            const randomIndex = Math.floor(Math.random() * data.length)
            const randomEmoji = data[randomIndex]
            const shuffleArray = [...data ]
            for (let i = shuffleArray.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [shuffleArray[i], shuffleArray [j]] = [shuffleArray[j], shuffleArray[i]];
            }

            const result = shuffleArray.map(item=>{
                return  `${item.name}`
            })
            document.getElementById("root").innerHTML = result.join(", ") + " " + `${randomEmoji.emoji}`
            
            
        })
        .catch(err=>{
            console.log(err)
        })

}

getRandomEmoji()

function guessEmoji(emoji, options){
    fetch("http://localhost:3000/emojis", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guess)
    }).then((res)=>{
        res.json()
    })
    .then(data => console.log(data))
}


// document.getElementById("search")