import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick ={()=>props.greetHandler('child')}>Hello from the child</button>
        </div>
    )
}

export default ChildComponent
