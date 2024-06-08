let soundToPlay;
let keyToPlay;

var sounds = {
    'a': 'Audio/boom.wav',
    's': 'Audio/clap.wav', 
    'd': 'Audio/hihat.wav', 
    'f': 'Audio/kick.wav',
    'g': 'Audio/openhat.wav', 
    'h': 'Audio/ride.wav',
    'j': 'Audio/snare.wav',
    'k': 'Audio/tink.wav', 
    'l': 'Audio/tom.wav',
};

function playSound(songName){
    let sound = new Audio(sounds[songName])
    sound.play()
}

document.querySelectorAll("div").forEach((element)=>{
    element.addEventListener("click", ()=>{
        let songName = element.classList.value
        playSound(songName)
    })
})

document.addEventListener("keydown", (event)=>{
    keyToPlay = event.key.toLowerCase();
    if(keyToPlay in sounds){
        playSound(keyToPlay)
    }
})