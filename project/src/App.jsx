import React, { useState } from 'react'

const App = () => {
//let counters = 0;
 const[counters,setcounters] = useState(0)
  const addValue = () =>{
   setcounters(counters + 1);
   }
  const removeValue =() =>{
    setcounters(counters - 1)

  }

  return (
    <>
    <h2>{counters}</h2>
    <h1>counter:{counters}</h1>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    <p>footer:{counters}</p>
    </>
  )
}

export default App