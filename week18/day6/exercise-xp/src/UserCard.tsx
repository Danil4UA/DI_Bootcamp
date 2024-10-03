interface UserCardProps {
    name?: string
    age?: number
}

const UserCard = (props: UserCardProps): JSX.Element => {
    const {name, age} = props
    
    return (
        <>
            {name && age? <p>Hello {name}, You are {age}</p>: <p>The data are missing...</p> }
            
        </>
    )
}

export default UserCard