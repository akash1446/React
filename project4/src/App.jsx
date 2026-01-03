import React from 'react'
import axios from  'axios'

const App = () => {
  const getData=async () => {
    const response=await axios.get('https://jsonplaceholder.typicode.com/albums')
    console.log(response.data)
  }
  return (
    <div>
      <button onClick={getData}>get Data</button>
      {/* <div>
      {data.map(function(element,idx){
        return <h3>Hi,{element.title}{idx}</h3>
      })}
      </div> */}
    </div>
  )
}

export default App