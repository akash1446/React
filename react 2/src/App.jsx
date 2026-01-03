import React from 'react'

const handleclick=()=>{
  alert("button is being clicked")
}
const handleparamclick=(msg)=>{
  alert(msg)
}
const wrapperhandler=()=>{
  handleparamclick("react class is going")
}

const App = () => {
  return (
    <div>
      <div>App is successfully uploaded</div>
      <div>My App is reached of the customer</div>
      <img src ="https://i.pinimg.com/1200x/1d/79/8a/1d798ab31d5fb3b4d331d3156c847d9f.jpg" alt="calender" width={"50%"} height={"50%"}></img>
      <button onClick={handleclick}>click</button>
      <button onClick={wrapperhandler}>clickParam</button>
    </div>
  )

}
export default App


//function call is replace by its return value
//a function will always return html
//we cannot write any thing after the return
//we can only return single data/entity/variable/value
//there must be single return in a function that must be last statement