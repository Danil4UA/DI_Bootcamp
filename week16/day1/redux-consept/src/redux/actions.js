export const INCREMENT  = "add"
export const DECREMENT = "minus"


export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: DECREMENT,
    }
}