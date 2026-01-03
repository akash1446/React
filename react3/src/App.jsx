import React from 'react'

const App = () => {
  let n=12;
  let s="hello";
  let b=true;
  let n1 =null;
  let un = undefined;
  const profiles = [
    {name:"Sidda Suresh",age:22},
    {name:"raghu",age:20},
    {name:"srinu",age:30}
  ]
  const updatedata = profiles.map((profiles,index)=>{
    return (
      <li>
        <span>Name:{profiles.name}</span>
        <small>Age:{profiles.age}</small>
      </li>
    )

  })
  return (
    <>
    <div>{n}</div>
    <div>{s}</div>
    <div>{b?'hi':'hello'}</div>
    <div>{n1}</div>
    <div>{un}</div>
    <h2>object:{profiles[0].name}</h2>
    <h1>json:{updatedata}</h1>
    </>
  )
}

export default App