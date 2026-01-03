import React, { useEffect, useState } from 'react'

const App = () => {

  //first->side effects function -> api fetching / axios
  //second->clean up function ->unmounting of the data and class components
  //third->dependency list through comma seperated

 const[count,setcount] =useState(0)
 const[total,settotal]= useState(0)

//variation 1
// useEffect(() => {
//   alert("I will rendering of the data")
// })

//variation 2->that will only run on first render
// useEffect(()=>{
//    alert("I will run only first render")
// },[])

//variation 3->that runs after count updated but before rendering
// useEffect(()=>{
  
//    alert("I will run everytime count is updated")

// }, [count])


//variation 4->Multiple dependencies
// useEffect(()=>{
//    alert("I will run everytime count is updated and is also total is updated")
// },[count,total])

//variation 5 -> adding the cleanup function

useEffect(() => {
   alert("count is updated")

  return () => {
    alert("count is unmounted from UI")
  }
}, [total])



function handleClick(){
  setcount(count+1)
}
// function handleTotal(){
//   settotal(total+1)
// }

  return (
    <div>
      <button onClick={handleClick}><img src="https://i.pinimg.com/736x/40/69/74/406974ad0c0251e605606bc4004fc81c.jpg" alt="cameraman" />Click count</button>
       <br/>
       count is:{count}
       <br/>
       {/* <button onClick={handleTotal}><img src="https://i.pinimg.com/736x/31/78/bd/3178bdf90515d0781941c9088fe80896.jpg" alt="small house" />Click total</button>
       <br/>
       Total is:{total} */}
    </div> 
  )
}

export default App