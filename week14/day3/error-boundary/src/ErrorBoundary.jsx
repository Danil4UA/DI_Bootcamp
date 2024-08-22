import React from "react";

class ErrorBoundary extends React.Component {
    constructor(){
        super()
        // create a state
        this.state = {
            hasError: false,
        }
    }
    // 1 option
    componentDidCatch = (error, errorInfo) => {
        console.log(error)
        console.log(errorInfo)
        this.setState({hasError: true})
    
    }
    // static method

    static getDerivedStateFromError = (error) => {
        return {hasError: true}
    }

    render(){
        console.log(this.props)
        if(this.state.hasError){
            return <h2>Ooops... {this.props.fallBack}</h2>
        }
        return this.props.children
    }
}

export default ErrorBoundary