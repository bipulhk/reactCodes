import React from 'react'

function FunctionEvent() {
    const handleClick = () =>{
        console.log('button is pressed')
    }
  return (
    <div>FunctionEvent

        <button onClick={handleClick}>click here</button>
    </div>
  )
}

export default FunctionEvent