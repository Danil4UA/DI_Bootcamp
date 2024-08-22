import { Link, useParams, useNavigate } from "react-router-dom"


const Product = (props) => {
    const params = useParams()
    console.log(params)
    const navigate = useNavigate()

    const toPhone = () => {
        navigate("/phone")
    }
    return (
        <>
            <h2>Product number {params.id} </h2>
            <Link to="/shop">Shop</Link>
            <button onClick={toPhone}>Navigate to Phone</button>
        </>
    )
}

export default Product