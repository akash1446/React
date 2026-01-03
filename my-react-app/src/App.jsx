import React, { useState } from 'react'
import { use } from 'react'

const App = () => {

  const[name, setname]=useState("")
  const[email, setemail]=useState("")
  const[password,setpassword]=useState("")
  const[phonenumber,setphonenumber]=useState("8976534568")

const submitHandler=(e)=>{
  e.preventDefault();
  const newuser = {name,email,password,phonenumber}
  console.log(newuser)
}
const submitHandler1=(e)=>{
  e.preventDefault();
  const newuser = {email,password}
  console.log(newuser)
}
  
  return (
      <>
      <div className='form'>
        <form onSubmit={submitHandler}>
        <h1>Create An Account</h1>

  
        <input type ="text" onChange={(e)=>setname(e.target.value)} value={name} placeholder='Name'/><br/><br/>
       
        <input type ="text"   onChange={(e)=>setemail(e.target.value)} value={email}   placeholder='Email'/><br/><br/>
        
        <input type ="password" onChange={(e)=>setpassword(e.target.value)}  value={password} placeholder='Password'/><br/><br/>
       
        <input type='number' onChange={(e)=>setphonenumber(e.target.value)}  value={phonenumber}  placeholder='phoneNumber'/><br/><br/>
        
        <button>Submit</button>
       </form>
      </div><br/>
      <div className='login'>
         <form onSubmit={submitHandler1}>
         <h2>Login User</h2>

         <input type ="text"   onChange={(e)=>setemail(e.target.value)} value={email}   placeholder='Email' class="input1"/><br/><br/>
        
        <input type ="password" onChange={(e)=>setpassword(e.target.value)}  value={password} placeholder='Password' class="input2"/><br/><br/>
       
        <button className='btn'>Submit</button>
       </form>
      </div>
</>
     
    
  
  )
}

export default App