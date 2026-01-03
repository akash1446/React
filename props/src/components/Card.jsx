import React from 'react'

const Card = ({logo,companyName,title,salary,type}) => {
    return (
    <div className='card'>
        <img src={logo}/>
        <h5>{companyName}</h5>
        <p className='role'>{title}</p>
        <p className='salary'>{salary}</p>
        <button className='btn'>{type}</button>
    </div>
  )
}

export default Card