import { useState } from "react";
import Garage from "./Garage.jsx"

const Car = (props) => {
    const {model} = props;
    const [color, setColor] = useState("red");

    return (
        <>
            <Garage size="small"></Garage>
            <h1>This car is {color} {model}</h1>
        </>
    )
}

export default Car