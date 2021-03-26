import React from 'react'

function Inline() {
    const heading ={
        color:'blue',
        fontSize:'100px',
        fontFamily:'monospace'
    }
    return (
        <div>
            <h1 style={heading}>Inline Style</h1>
        </div>
    )
}

export default Inline
