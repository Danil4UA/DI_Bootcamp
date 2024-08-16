import { useState } from 'react'
import './App.css'

function App() {

 const data = [
  {
    "id": 1,
    "text": "A room without books is like a body without a soul.",
    "author": "Marcus Tullius Cicero"
  },
  {
    "id": 2,
    "text": "Time is what we want most, but what we use worst.",
    "author": "William Penn"
  },
  {
    "id": 3,
    "text": "The pen is mightier than the sword.",
    "author": "Edward Bulwer-Lytton"
  },
  {
    "id": 4,
    "text": "Mirrors don't lie, they only show a reflection of what's there.",
    "author": "Anonymous"
  },
  {
    "id": 5,
    "text": "A picture is worth a thousand words.",
    "author": "Frederick R. Barnard"
  },
  {
    "id": 6,
    "text": "Coffee is a language in itself.",
    "author": "Jackie Chan"
  },
  {
    "id": 7,
    "text": "The light at the end of the tunnel is just the light of an oncoming train.",
    "author": "Anonymous"
  },
  {
    "id": 8,
    "text": "The best way to appreciate your job is to imagine yourself without one.",
    "author": "Oscar Wilde"
  },
  {
    "id": 9,
    "text": "Not all those who wander are lost.",
    "author": "J.R.R. Tolkien"
  },
  {
    "id": 10,
    "text": "Money can’t buy happiness, but it can buy a lot of things that make life easier.",
    "author": "Anonymous"
  }
]
  const [index, setIndex] = useState(0)
  const [quotesOrder, setQuotesOrder] = useState([])

  const randomIndex = () => {
    if(quotesOrder.length > 9){
      setQuotesOrder([])
      return alert("All quots ran out")
    }

    const random = Math.floor(Math.random() * data.length )
    const ifInclueds = quotesOrder.includes(random)
    console.log(ifInclueds)
    console.log(quotesOrder)
    if(!ifInclueds){
      const copyArr = [...quotesOrder]
      copyArr.push(random)
      setQuotesOrder(quotesOrder => copyArr)
      setIndex(index => random)
    }else{
      randomIndex()
    }

  }
  return (
    <>
    <div>
        <p>id: {data[index].id}</p>
        <p>text: {data[index].text}</p>
        <p>author: {data[index].author}</p>
    </div>
    <button onClick={randomIndex} >Next Quote</button>
    </>
  )
}

export default App
