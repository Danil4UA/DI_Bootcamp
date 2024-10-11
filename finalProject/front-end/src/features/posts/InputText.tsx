import { Input } from '@mui/material'

interface InputProps {
    placeholder: string
}

const InputText = ({placeholder}: InputProps): JSX.Element => {
    return (
            <Input type="text" placeholder={placeholder} />
    )
}

export default InputText