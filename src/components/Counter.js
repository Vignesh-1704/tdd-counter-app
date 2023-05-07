import React, { useState } from 'react'

function Counter({initialValue}) {

    const [count, setcount] = useState(initialValue??0)
    
    const handleOnClickAdd = () => {  
        setcount((prevCount) => prevCount + 1)
    }
    const handleOnClickSub = () => {  
        setcount((prevCount) => prevCount - 1)
    }
  return (
    <div>
        <h1>M2P Counter App</h1>
        <h3>{count<0?"Not allowed":count}</h3>
        <button onClick={handleOnClickAdd}>Add</button>
        <button onClick={handleOnClickSub}>Sub</button>
    </div>
  )
}

export default Counter