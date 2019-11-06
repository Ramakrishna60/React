import React from 'react'

function Functionclick() {
    function functionMessage(){
        console.log('clicked the function message')
    }
    return (
        <div>
            <h1>Functionclick</h1>
            <button onClick={functionMessage}>button</button>
        </div>
    )
}

export default Functionclick
