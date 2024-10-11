import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
    return (
        <>  
            <Stack spacing={2} direction={"row"}>
                <Button component={Link} to="/">Dashboard</Button>
                <Button component={Link} to="/login">Login</Button>
                <Button component={Link} to="/register">Register</Button>
                <Button component={Link} to="/admin">Admin</Button>
            </Stack>
        </>
    );
}

export default Header;