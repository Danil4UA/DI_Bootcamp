import axios from "axios"

export async function fetchPosts(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error; // Re-throw the error to handle it in the route handler
    }
}