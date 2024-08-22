import { useState } from "react"

const Phone = (props) =>  {
    const [myPhone, setMyPhone] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020,
    })

    const changeColor = () => {
        const newPhone = {...myPhone, color: "red"};
        setMyPhone(newPhone)
    }
    return (
        <>
        <h2>My phone is {myPhone.brand}</h2>
        <p>it is {myPhone.color} {myPhone.model} from {myPhone.year}</p>
        <button onClick={changeColor}>Change color</button>
        </>
    )
}

export default Phone