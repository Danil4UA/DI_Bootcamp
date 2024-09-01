import { useSelector, useDispatch, connect } from "react-redux"
import { counterReducer } from "../redux/reducer"
import React from "react"
import { increment, decrement } from "../redux/actions"


//connect was bedore hooks so if we havle class component we canno use hooks, we need to use 
/**
 * mapStateToProps = useSelector
 * {
 *  count: state.counterReducer.count
 * }
 * mapDispatchToProps = useDispatch
 */

// const Counter = (props) => {

class Counter extends React.Component {
    render(){
        return (
            <>
                <h2>The amaizing redux counter</h2>
                <button onClick={()=>this.props.add()}> + </button>
                Count: {this.props.count}
                <button onClick={()=>this.props.minus()}> - </button>
            </>
        )
    }
}
    

    // const count = useSelector((state)=>state.counterReducer.count)

    // const dispatch = useDispatch()


const mapState = (state) => {
    return {
        count: state.counterReducer.count,
    }
}
const mapDispatch = (dispatch) => {
    return {
        add: ()=> dispatch(increment()),
        minus: ()=> dispatch(decrement())
    }
}

export default connect(mapState, mapDispatch)(Counter)

/**
 * mapStateToProps = useSelector
 * {
 *  count: state.counterReducer.count
 * }
 * mapDispatchToProps = useDispatch
 */