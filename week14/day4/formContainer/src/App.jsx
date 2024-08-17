import { useState } from 'react'
import './App.css'

function App() {
  const [ifSubmitied, setIfSubmitied] = useState(false)
  const [fName, setfName] = useState("")
  const [lName, setlName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [destination, setDestination] = useState("")
  const [nuts, setNuts] = useState(false)
  const [lactose, setLactose] = useState(false)
  const [vegan, setVegan] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();


    const query = new URLSearchParams({
      fName,
      lName,
      age,
      gender,
      destination,
      nuts: nuts ? 'on' : 'off',
      lactose: lactose ? 'on' : 'off',
      vegan: vegan ? 'on' : 'off'
    }).toString()

    const url = `http://localhost:5173/?${query}`
    console.log(url)

    setIfSubmitied(true)
    console.log(`First Name: ${fName}, Last Name: ${lName}, Age: ${age},  Gender: ${gender}, Destination: ${destination} `);
  }
  return (
    <>
      <h1>Form Container</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" name="fName" value={fName} onChange={e=>setfName(e.target.value)} />
        <input type="text" placeholder="Last Name" name="lName" value={lName} onChange={e=>setlName(e.target.value)} />
        <input type="number" placeholder="Age" name="agex" value={age} onChange={e=>setAge(e.target.value)} />

        <div>
          <input type="radio" id="male" name="gender" value="male" onClick={e=> setGender(e.target.value)} />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" onClick={e=> setGender(e.target.value)} />
          <label htmlFor="female">Female</label>
        </div>

        <div>
          <p>Select your destination</p>
          <select name="destination" id="destination" value={destination} onChange={e => setDestination(e.target.value)}>
            <option value="default" >Select your destination</option>
            <option value="italy">Italy</option>
            <option value="spain">Spain</option>
            <option value="montenegro">Montenegro</option>
          </select>
        </div>

        <div>
          <p>Dietary restrictions</p>
          <input type="checkbox" id="nuts" name="dietary" value={nuts} onChange={e => setNuts(!nuts)} />
          <label htmlFor="nuts">Nuts free</label>

          <input type="checkbox" id="lactose" name="dietary"  value={lactose} onChange={e => setLactose(!lactose)} />
          <label htmlFor="lactose">Lactose free</label>

          <input type="checkbox" id="vegan" name="dietary"  value={vegan} onChange={e => setVegan(!vegan)} />
          <label htmlFor="vegan">Vegan</label>
        </div>

        <input type="submit" value="Submit" />
      </form>

      {ifSubmitied? 
        <div>
          <h2>Entered information</h2>
          <p>Your name: {fName} {lName}</p>
          <p>Your age: {age}</p>
          <p>Your gender: {gender}</p>
          <p>Destination: {destination}</p>
          <ul>
            <p>Your dietary restrictions:</p>
            <li>Nuts free: {nuts? <p>Yes</p> : <p>No</p>}</li>
            <li>Nuts free: {lactose? <p>Yes</p> : <p>No</p>}</li>
            <li>Nuts free: {vegan? <p>Yes</p> : <p>No</p>}</li>
          </ul>

        </div> 
      : null}
    </>
  )
}

export default App
