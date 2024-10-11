interface SelectInputProps {
    size?: string[]
    language?: string[]
}

const SelectInput = ({size, language}:SelectInputProps): JSX.Element => {
    const selectedProps = size || language
    if(!selectedProps) return <>Props not found</>
    return (
        <>
            <select>
                {selectedProps.map((item)=>{
                    return <option key={item}>{item}</option>
                })} 
            </select>
        </>
    )
}


export default SelectInput