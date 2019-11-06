import  React , { Component } from 'react';
class Hello extends Component{
            state={
                message: 'welcome visitor'
                }
    changeMessage(){
        this.setState({
            message:'Thanks for subscribe'
        })

    }
    render(){
        return(
            <div>
             <h1> {this.state.message}</h1>
             <button onClick={ () => this.changeMessage()}>Action</button>
             </div>
        );
    }
    
}
 
export default Hello;