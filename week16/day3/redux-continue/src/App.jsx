import Users from './features/users/Users.jsx'
import './App.css'
import Counter from "./features/counter/Counter.jsx"

function App() {

  return (
    <>
      <div>
        <h2>Redux Toolkit - RTK</h2>
        <Counter></Counter>
      </div>
      <Users></Users>
    </>
  )
}

export default App