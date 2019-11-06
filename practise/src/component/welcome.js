import React, { Component } from 'react';
class Welcome extends Component {
    render() {
        return <h1>welcome {this.props.name}</h1>
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!');

    }


}

export default Welcome;