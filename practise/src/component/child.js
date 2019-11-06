import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Prachi</button>
        </div>
    )
}

export default Child
