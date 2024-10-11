interface SelectInputProps {
    size?: string[]
    language?: string[]
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


const SelectInput = ({ size, language, onChange }: SelectInputProps): JSX.Element => {
    const selectedProps = size || language;
    if (!selectedProps) return <>Props not found</>;
    
    return (
        <select onChange={onChange}>
            {selectedProps.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
}


export default SelectInput