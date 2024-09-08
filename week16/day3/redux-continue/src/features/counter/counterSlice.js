import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    count: 0,
}
// 1 param is a type 

export const delaytIncrementThunk = createAsyncThunk("counter/delay", ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej(5)
        }, 5000)
    })
})

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // type will be: counter/increment
        increment: (state) => {
            state.count += 1
        },

        // type will be: counter/decrement
        decrement: (state) => {
            state.count -= 1
        },

        reset: (state) => {
            state.count = 0
        },

        resetByUserInput: (state, action) => {
            const value = action.payload
            state.count += Number(value)
        },
        addTwoNumbers: (state, action) => {
            const result = action.payload.num1 + action.payload.num2
            console.log(result)
            state.count = state.count + result
        },
        // addFive: (state) => {
        //     // setTimeout(()=>{
        //     //     state.count += 5
        //     // },5000)
        //    setTimeout(()=>{
        //     state.count = state.count + 5
        //    },5000)
         
        // },
        incrementWithPrepare: {
            // we still have payload as one param but we preparing and overwriting it below. we can send a prepared action
            reducer(state, action){
                state.count += action.payload
            },
            prepare(param1, param2){
                return {
                    payload: param1 + param2
                };
            }
        }
    },
    extraReducers(builder){
        builder
            .addCase(delaytIncrementThunk.fulfilled, (state, action)=>{
                state.count += action.payload 
            })
            .addCase(delaytIncrementThunk.rejected, (state, action)=>{
                console.log(action)
            })
    }
})

export const {increment, decrement, reset, resetByUserInput, addTwoNumbers, incrementWithPrepare} = counterSlice.actions;
export default counterSlice.reducer;