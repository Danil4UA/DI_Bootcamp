import { useState } from "react";
import data from "./assets/data.json";

function App() {

  const howMAyHeros = 
    data.superheroes.map(item=>{
      return item.id
  })


  const [shuffledArray, setShuffledArray] = useState(howMAyHeros);
  const [userGuess, setUserGuess] = useState([]);
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const superheroes = data.superheroes;

  // Shuffle the array of superhero IDs
  const shuffleArray = (array) => {
    let arr = [...array]; // Create a copy of the array to avoid mutating the original
    let currentIndex = arr.length;
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
  };

  // Handle card click
  const handleClick = (id) => {
    if(userGuess.includes(id)){
      setTopScore(prev=> prev < score ? setTopScore(score) : prev )
      alert(`Ooops, you did a ,istake, your score is ${score}`)
      setScore(0)
      setUserGuess([]);
    }else{
      setScore(prev=> prev + 1)
      setUserGuess((prevGuesses) => [...prevGuesses, id]);
      setShuffledArray(shuffleArray(shuffledArray));
    }
  };

  return (
    <>
      <div id='root'>
        <h1>Memory Game</h1>
        <nav>Your current score: {score} Your top score: {topScore}</nav>
        <div id="container">
          {shuffledArray.map((id) => {
            // Find superhero by ID
            const superhero = superheroes.find(hero => hero.id === id);

            if (!superhero) {
              return null; // Handle case where superhero is not found
            }

            return (
              <div key={superhero.id} onClick={() => handleClick(superhero.id)} className="card">
                <img src={superhero.image} alt={`Image of ${superhero.name}`} />
                <p>Name: {superhero.name}</p>
                <p>Occupation: {superhero.occupation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;