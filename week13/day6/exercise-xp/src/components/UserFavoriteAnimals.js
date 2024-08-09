
const UserFavoriteAnimals = (props) => {
    const {animals} = props
    console.log(animals)
    return (
        <ul>{
            animals.map((item)=>{
                return <li>{item}</li>
            })
            }
        </ul>
    )
}

export default UserFavoriteAnimals