import { useState } from 'react'
import './App.css'
import Heading from "./components/Heading"
import Section from "./components/Section"
import List from './components/List'
import Counter from "./components/Counter"

function App() {

  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Heading title="React + TS" subTitle="typescript is powerfull tool" />
      <Section content='My content'>
        <h3>Hello TS</h3>
      </Section>
      <List items={["a", "b", 1]}></List>
      <Counter setCount={setCount} count={count}>
        <h2>{count}</h2>
      </Counter>
    </>
  )
}

export default App
