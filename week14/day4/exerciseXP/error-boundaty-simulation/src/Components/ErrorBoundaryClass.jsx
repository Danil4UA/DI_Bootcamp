import React from "react";

class ErrorBoundaryClass extends React.Component {
    constructor() {
        super()
        this.state = {
            error: false,
        }
    }
    componentDidCatch = (err) => {
        console.log(err)
        this.setState({error: true})
    }
    render(){
        if(this.state.error){
            return (
                <div>Ooops</div>
            )
        }
        return this.props.children
    }
}


export default ErrorBoundaryClass