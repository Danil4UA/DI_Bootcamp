import { selectGenres} from "./state/selectors"
import {useSelector, useDispatch} from "react-redux"
import {filterBooks} from "./state/slice"
const BooksSelectGenre = () => {
    const dispatch = useDispatch()
    const genres = useSelector(selectGenres)
    const handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value
        dispatch(filterBooks(value))
    }

    return (
        <>

            <select onChange={handleChange}>
                <option value="-1">Select Genre</option>
                {genres.map((item, i)=>{
                    return (
                        <option key={i}>{item}</option>
                    )
                })}
           
            </select>
        </>
    )
}

export default BooksSelectGenre