import './App.css'
import Counter from "./Components/Counter.jsx"
import ErrorBoundary from './ErrorBoundary.jsx'
// How do we catch errors in jsx 

function App() {

  // we need to wrap only specific components when we think can make a problem or an error 

  return (
    <>
     <h1>Error Boundary</h1>
    <ErrorBoundary fallBack="error Counter 1">
      <Counter></Counter>
    </ErrorBoundary>

    <ErrorBoundary fallBack="error Counter 2">
      <Counter></Counter>
    </ErrorBoundary>
    </>
  )
}

export default App
