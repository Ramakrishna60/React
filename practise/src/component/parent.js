import React, { Component } from 'react'
import Child from './child';

class Parent extends Component {
     constructor(props){
         super(props)
         this.state={
             parent:'granted'
         }
         this.grandChild= this.grandChild.bind(this);
     }
     grandChild(){
         alert(`hello ${this.state.parent}`)
     }
    render() {
        return (
            <div>
                <Child greetHandler={this.grandChild}/>
            </div>
        )
    }
}

export default Parent
