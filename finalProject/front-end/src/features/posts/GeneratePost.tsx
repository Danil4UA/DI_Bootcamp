import PostForm from "./PostForm"
import PostResult from "./PostResult"
// import PostTemplates from "./PostTemplates"

// import { useState } from "react"
const GeneratePost = () => {
    // const [selectedTemplate, setSelectedTemplate] = useState("");

    return (
    <>
        <h2>Post Generation</h2>
        <div style={{display: "flex", justifyContent:"space-evenly "}}>
            {/* <PostTemplates /> */}
            <PostForm />
            <PostResult />

        </div>
    </>
    )

}

export default GeneratePost
