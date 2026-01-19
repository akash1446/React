import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import'./app.css'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
const App = () => {
  return (
    <div>
      <nav>
        <Link to ='/'>Home</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/contact'>Contact</Link>
      </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App