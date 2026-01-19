import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page</p>
      <a href='/'>Go To Home Page</a><br />      
      <a href='/contact'>Go To Contact Page</a>
      <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div id='carouselExample' className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="https://courses.frontlinesedutech.com/wp-content/uploads/2025/12/Banners-1.png" className='d-block w-100' alt="..." />
        </div>
        <div className="carousel-item">
       <img src="https://courses.frontlinesedutech.com/wp-content/uploads/2025/09/1-2.webp" className='d-block w-100' alt="..." />
        </div>
        <div className="carousel-item">
         <img src="https://courses.frontlinesedutech.com/wp-content/uploads/2025/09/2-2.webp" className='d-block w-100' alt="..." />
      </div>
      </div>
       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
       </button>
       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
       </button>
       </div>
   </div>
   </div>
     
  )
}

export default About