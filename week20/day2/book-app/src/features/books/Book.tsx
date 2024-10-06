import { useFetchBooks } from "./state/booksHooks";
import { useRef } from "react";
import { useDispatch } from "react-redux"; 
import { AppDispatch } from "../../app/store";
import { fetchBooks } from "./state/booksSlice"; 

const Book = (): JSX.Element => {
    useFetchBooks("*");
    const inputRef = useRef<HTMLInputElement | null>(null); 
    const dispatch = useDispatch<AppDispatch>();

    const handleSearch = () => {
        const value = inputRef.current?.value.trim();
        if (value) {
            dispatch(fetchBooks(value));
        }
    };

    return (
        <>
            <input ref={inputRef} type="text" placeholder="Search your book..." />
            <button onClick={handleSearch}>Search</button>
        </>
    );
};

export default Book;