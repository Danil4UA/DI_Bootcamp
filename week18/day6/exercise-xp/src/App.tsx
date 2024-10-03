
import './App.css'
import Greeting from './Greeting'
import Counter from './Counter'
import UserCard from './UserCard'
import DisplayData from './DisplayData'
function App() {

  return (
    <>
      <Greeting name="John"/>
      <Counter />
      <UserCard name={"John"} age={20} />
      <DisplayData />
    </>
  )
}

export default App
