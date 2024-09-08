import { memo } from "react"


const Todo = (props) => {
    console.log("Todo render...")
    return (
        <>
            <h2>Todos: </h2>
            {props.todos.map((item, index)=>{
                return (
                    <div key={index}>
                        {item} {index}
                    </div>
                )
            })}
        </>
    )
}

// if nothin changing the props then we can use memo. it knows that no changes and it will not render another components

export default memo (Todo)