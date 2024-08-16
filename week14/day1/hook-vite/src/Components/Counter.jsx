import React from "react";

class Counter extends React.Component {
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }
    addOne = () => {
        this.setState({counter: this.state.counter + 1})
    }

    minusOne = () => {
        this.setState({counter: this.state.counter - 1})
    }

    render(){
        return (
            <>
            <h2>Counter class</h2>
                <button onClick={this.addOne}> + </button>
                Counter: {this.state.counter}
                <button onClick={this.minusOne}> - </button>
            </>
        )
    }
}

export default Counter