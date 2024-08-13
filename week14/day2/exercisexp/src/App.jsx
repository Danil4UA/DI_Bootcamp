
import './App.css'
import Car from "./Components/Car.jsx"
import Events from './Components/Events.jsx';
const carinfo = {name: "Ford", model: "Mustang"};

function App() {

  return (
    <>
      <Car model={carinfo.model}></Car>
      <Events></Events>
    </>
  )
}

export default App
