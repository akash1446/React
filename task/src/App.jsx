import React from 'react'
import { useState } from 'react'

const App = () => {
  let companies =["Google","Microsoft","Wipro","TCS","FLM" ,"PythonLife","infosys","EY","startups"];
  const[companyIndex, setCompanyIndex] = useState(1)
  
  const addcompany = () =>{
    setCompanyIndex(nextIndex =>
      nextIndex < companies.length - 1  ? nextIndex + 1 : 0
    );
  }
const removecompany = () => {
  setCompanyIndex(prevIndex =>
    prevIndex < companies.length - 1 ? prevIndex - 1 : 0
  );
};

return (
    <>
    <h1>Companies:{companies[companyIndex]}</h1>
    <p>Index:{companyIndex}/{companies.length - 1}</p>
    <button onClick={addcompany}>Add Name</button>
    <button onClick={removecompany}>Remove Name</button>
    <p>footer:{companies}</p> 
   </>
  )
}

export default App