import './App.css';
import UserFavoriteAnimals from "./components/UserFavoriteAnimals.js"
import Exercise  from './components/Exercise/Exercise3.js';

const myelement = <h1>I Love JSX!</h1>;

const sum = 5 + 5

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey',"Dog"]
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

          {/* Exer 1 */}

          <p>Hello World!</p>
          {myelement}
          <p>React is {sum} times better with JSX</p>

          {/* Exer 2 */}
          <h3>{user.firstName + " " + user.lastName}</h3>
          <UserFavoriteAnimals animals={user.favAnimals}/>
          <Exercise />
      </header>
    </div>
  );
}

export default App;
