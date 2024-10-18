import PostForm from "./PostForm"
import PostResult from "./PostResult"
// import PostTemplates from "./PostTemplates"

// import { useState } from "react"
const GeneratePost = () => {
    // const [selectedTemplate, setSelectedTemplate] = useState("");

    return (
    <>
        
        <div style={{display: "flex", justifyContent:"space-evenly ", padding: "30px", maxWidth: "1400px", margin:"auto"}}>
            <PostForm />
            <PostResult />

        </div>
    </>
    )

}

export default GeneratePost
