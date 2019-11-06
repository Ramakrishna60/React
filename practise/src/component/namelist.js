import React from 'react'

function Namelist() {
    const names = ['raja', 'siva']
    const namelist = names.map(name => <h1>{name}</h1>)
    const persons = [{
        id: 1,
        color: 'green',
        age: 21
    },
    {
        id: 2,
        color: 'blue',
        age: 22
    },
    {
        id: 2,
        color: 'blue',
        age: 22
    }
    ]
    const personlist = persons.map((person,index) => <h5 key = {index}>{index} {person.color} </h5>)
    // const personlist = persons.map(color => <h5 style={{background:color.color}}> {color.color} </h5>)
    return (

        <div>
            {
                <h2>{namelist}
                {personlist}</h2>

            }
        </div>
    )
}

export default Namelist
