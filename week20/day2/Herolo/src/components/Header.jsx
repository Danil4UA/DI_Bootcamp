import {Link} from "react-router-dom"
import {Button, Stack} from "@mui/material"


const Header = () => {
    return (
        <Stack spacing={2} direction={"row"}>
            <Button LinkComponent={Link} to="/">Home</Button>
            <Button LinkComponent={Link} to="/favorites">Favorites</Button>
        </Stack>
    )
}

export default Header