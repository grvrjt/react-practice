import React from 'react'

function Person({person ,key }) {
    return (
        <div>
            <h1>I am {person.name}{key}. I am {person.age} yaer old.  I know {person.skill}</h1>
        </div>
    )
}

export default Person
