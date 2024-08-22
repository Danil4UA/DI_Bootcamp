
import './App.css'
import Car from "./Components/Car.jsx"
import Phone from './Components/Phone.jsx';
const carinfo = {name: "Ford", model: "Mustang"};

function App() {

  return (
    <>
      <Car model={carinfo.model}></Car>
      <Phone></Phone>
    </>
  )
}

export default App
