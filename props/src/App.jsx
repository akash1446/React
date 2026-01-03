import React from 'react'
import Card from './components/Card'

function App () {
  const users =[
    {
      id:1,
      logo:'https://i.pinimg.com/736x/74/88/6b/74886b52f5219b5fb45546c95e23202c.jpg',
      companyName:"Amazon",
      title:"Senior UI/UX Designer",
      salary:'$120/hr',
      type:'Full-time'
    },
    {
      id:2,
      logo:'https://i.pinimg.com/1200x/b7/86/79/b786795a5bfba85a9d0422b015d2a460.jpg',
      companyName:"Google",
      title:"Graphic Designer",
      salary:'$150-220k',
      type:'Full-time'
    },
    {
      id:3,
      logo:'https://i.pinimg.com/1200x/81/1c/e0/811ce01935b58d66a86cbe67b1e7f55d.jpg',
      companyName:"Dribble",
      title:"Senior Motion Designer",
      salary:'$85/hr',
      type:'Contract'
    },
    {id:4,logo:'https://i.pinimg.com/1200x/18/f1/72/18f1727873924ba58fde1f739d11b77b.jpg',companyName:"Figma",title:"UX Designer",salary:'$200-250k',type:'Full-time'},
    {id:5,logo:'https://i.pinimg.com/1200x/99/df/0e/99df0ee3f07a51e70aa585a07c55953d.jpg',companyName:"Airbnb",title:"Junior UI/UX Designer",salary:'$100/hr',type:'Contract'},
    {id:6,logo:'https://i.pinimg.com/736x/1b/56/fd/1b56fd706cdbaa4646fd0472193d5005.jpg',companyName:"Apple",title:"Graphic Designer",salary:'$85-120k',type:'Full-time'}
    ]
  return (
          
     <div className='job-grid'>
       {users.map((user)=>(
        
         <Card key={user.id} logo={user.logo} companyName = {user.companyName} title={user.title} salary={user.salary} type={user.type} 
           />

        
    ))}
    <h2>Users Company Lists</h2> 
   </div>
  
  
   
  )
}

export default App