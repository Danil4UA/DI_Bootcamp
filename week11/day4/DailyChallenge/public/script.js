let randomEmoji = {}


function getRandom() {
    fetch('http://localhost:3000/emojis')
        .then((res) => res.json())
        .then((data) => {
            randomEmoji = data.randomEmoji;
            let options = data.shuffleEmojis;
            console.log(randomEmoji);
            console.log(options);
            render(randomEmoji, options);
        })
        .catch((e) => {
            console.log(e);
        });
}

getRandom();


function guessEmoji() {
    const guess = document.getElementById('guess').value;
    const name = randomEmoji.name;
    fetch('http://localhost:3000/emojis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            guess
        })
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.code === 'ok') {
                document.getElementById('msg').innerHTML = `
                    <h2>${data.message} score: ${data.score}</h2>`;
                getRandom();
            } else {
                document.getElementById('msg').innerHTML = `
                    <h2>${data.message}</h2>`;
            }
        });
}


function render (emoji, options){
    const html = options.map(item=>{
        return `${item.name},`
    })
    const root = document.getElementById("root")
    root.innerHTML = "options: " + html.join(" ") + "hint: " + emoji.emoji
}