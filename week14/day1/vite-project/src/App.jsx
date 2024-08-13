
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import usersArr from "./users.json"
import Users from "./components/Users.jsx"

const arr = [
  {username: "John", email: "john@gmail.com"},
  {username: "Simon", email: "simon@gmail.com"},
  {username: "Anne", email: "anne@gmail.com"},
  

]

/**
Instructions for the Exercise:

1. Create a React app.
2. Import the users.json file from the src folder.
3. Create a User component.
4. Send user information via props to the User component.
5. Display the users, with each user showing their name, email, username, and user's image.
6. For the image source, you can use: https://robohash.org/1?size=150x150.

 */

function App() {

  return (
    <>
      {
        usersArr.map((item,index)=>{
          return <Users key={index} name={item.name} username={item.username} email={item.email} id={item.id}></Users>
        })
      }
      
      
    </>
  )
}

export default App
