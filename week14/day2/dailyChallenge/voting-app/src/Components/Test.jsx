import { useEffect } from "react";

const Test = () => {

    useEffect(()=>{
        
        //unmount
        return ()=>{console.log("help me they try to remove me from the page")}
      })

    return (
        <>
            <h2>Hi, I am your test component</h2>
        </>
    )
}

export default Test