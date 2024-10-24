import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    label: string;
    name: string;
    options: string[];
    value: string;
    onChange: (event: SelectChangeEvent) => void;
}

const PostCustomSelect = ({ label, name, options, value, onChange }: Props): JSX.Element => (
    <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select name={name} value={value} onChange={onChange}>
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default PostCustomSelect;