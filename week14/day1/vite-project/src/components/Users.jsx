import './users.css'
import Button from '@mui/material/Button';

const Users = (props) => {
    const {name, username, email, id} = props


    // 1 option to add css 
    // 2 option is to create a .css file and just add class and import file 

    const styleCards = {
        border: "1px solid black",
        margin: "25px",
        padding: "20px",
        backgroundColor: "lightgreen",
        width: "300px",
        minHeight: "500px",

    }

    const image = `https://robohash.org/${id}?size=150x150`
    return (
        <>
            <div className="userstyle">
                <img src={image}></img>
                <h1>{name}</h1>
                <h2>{username}</h2>
                <h2>{email}</h2>
                <Button variant="contained">Contained</Button>
            </div>
        </>
    )

}

export default Users