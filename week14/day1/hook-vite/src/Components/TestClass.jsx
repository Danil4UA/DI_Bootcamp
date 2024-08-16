import React from "react";


class TestClass extends React.Component {
    
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <h2>Class Component</h2>
                <h3>{this.props.text}</h3>
            </div>
        )
    }
}

export default TestClass


// class Animal {
//     constructor(type, name){
//         this.name = name
//         this.type = type
//     }
//     getType(){
//         return this.type
//     }
// }

// const dog = new Animal("Dog", "Archi")


// class Dog extends Animal {
//     constructor(type, name){
//         super(type, name)
//         this.voice = "bark"
//     }

//     getVoice(){
//         return `My ${this.type}, ${this.name} is ${this.voice}`
//     }
// }