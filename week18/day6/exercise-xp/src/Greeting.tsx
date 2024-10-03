interface GreetingProps {
    name: string
}

const Greeting = (props: GreetingProps): JSX.Element => {

    return (
        <>
            <p>Hello, {props.name}</p>
        </>
    )
}
export default Greeting