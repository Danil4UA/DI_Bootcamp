interface SelectInputProps {
    size?: string[]
    language?: string[]
    platform?: string[]
    label?: string
    tone? : string[]
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


const SelectInput = ({ size, language, platform, tone, onChange }: SelectInputProps): JSX.Element => {
    const selectedProps = size || language || platform || tone;
    if (!selectedProps) return <>Props not found</>;
    
    return (
        <>
        <select onChange={onChange}>
            {selectedProps.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
        </>
        
    );
}


export default SelectInput