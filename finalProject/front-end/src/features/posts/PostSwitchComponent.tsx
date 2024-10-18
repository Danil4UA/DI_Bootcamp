import { FormControlLabel, Switch } from '@mui/material';

interface Props {
    name: string;
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PostSwitchComponent = ({ name, label, checked, onChange }: Props): JSX.Element => (
    <FormControlLabel
        control={<Switch name={name} checked={checked} onChange={onChange} />}
        label={label}
    />
);

export default PostSwitchComponent;