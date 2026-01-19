import React from 'react'
import'./Home.css'
import { Routes } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>IPL Teams Images</h1>
      <div className='grid'>
        <div className='card'>
        <img src="https://i.pinimg.com/736x/59/97/01/599701670284a5109f2b3b8d3ac8f2e1.jpg" alt="csk" />
        <div className='fivetropy'>CSK</div>
        </div>
        <div className='card'>
          <img src="https://i.pinimg.com/1200x/ea/3a/8b/ea3a8b382a85a35548fe7071b140a254.jpg" alt="MI" />
          <div className='fivetimes'>MI</div>
        </div>
        <div className='card'>
          <img src="https://i.pinimg.com/736x/49/25/e7/4925e7a1973ce9fa07d4ea4eb9dcbaef.jpg" alt="GT" />
          <div className='otc'>GT</div>
        </div>
        <div className='card'>
          <img src="https://i.pinimg.com/1200x/e4/eb/8a/e4eb8aa5331aaf9df1a2d54c1a0dfe23.jpg" alt="RCB" />
          <div className='ot'>RCB</div>
        </div>
        <div className='card'>
          <img src="https://i.pinimg.com/1200x/ad/59/59/ad59592a446d955c69488856c11829e3.jpg" alt="PK" />
          <div className='no'>PK</div>
        </div>
        <div className='card'>
          <img src="https://i.pinimg.com/1200x/c0/3c/0d/c03c0d7f37339e9ecaf35f554d6ef444.jpg" alt="DC" />
          <div className='nc'>DC</div>
        </div>
        <div className='card'>
          <img src="https://i.pinimg.com/736x/bb/a2/86/bba2868d9a3c6461ded19475c913c43a.jpg" alt="HYD" />
          <div className='twotimes'>HYD</div>
        </div>
        <div className='card'>
          <img src="https://i.pinimg.com/1200x/de/62/a9/de62a95a4d2a6f6050350606d5fb393c.jpg" alt="RR" />
          <div className="title">RR</div>
        </div>
        <div className='card'>
          <img src="https://i.pinimg.com/1200x/1b/56/d8/1b56d8a4dad732f1d55ec51f0e2b5e04.jpg" alt="KKR" />
          <div className='one'>KKR</div>
        </div>
        <div className='card'>
          <img src="https://i.pinimg.com/736x/3b/97/19/3b97193644775eeccda31362eabd5715.jpg" alt="LSG" />
          <div className='nac'>LSG</div>
        </div>
     </div>
   </div>
  )
}

export default  Home