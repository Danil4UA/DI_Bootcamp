const Language = (props)=> {
    const {name, votes, setLanguages, languages, index} = props

    function increaseByOne(){
        const newLanguages = [...languages]

        // const findIndex = newLanguages.findIndex((item)=>{
        //    return  item.name === name
        // })

        // newLanguages[index] = {name, votes: votes + 1};

        newLanguages[index].votes++
        setLanguages(newLanguages)
    }
    return(
        <>
        <div className="container">
            <div>{votes}</div>
            <div>{name}</div>
            <button onClick={increaseByOne}>Click Here</button>
        </div> 
        </>
    )
}

export default Language