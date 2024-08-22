import Counter from './Components/Counter.jsx'
import ErrorBoundaryClass from './Components/ErrorBoundaryClass.jsx'
import './App.css'


function App() {

  return (
    <>
      <ErrorBoundaryClass>
        <Counter></Counter>
      </ErrorBoundaryClass>
      <Counter></Counter>
    </>
  )
}

export default App
