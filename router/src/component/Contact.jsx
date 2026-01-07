import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contactheading'>
      <h1>Contact Form</h1><br />
      <form className='infom'>
        <label htmlFor='Name'>Name</label><br/>
        <input type="text"/><br/>
        <label htmlFor='DOB'>DOB</label><br/>
        <input type='date'/><br/>
        <label htmlFor='Adhaar'>Adhaar</label><br/>
        <input type="number"/><br/>
        <label htmlFor='Phone'>Phone</label><br/>
        <input type="tel"/><br/>
        <label htmlFor='Email'>Email</label><br/>
        <input type="email"/><br/>
        <label htmlFor='Message'>Message</label><br/>
        <textarea placeholder="Enter your message"></textarea><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact