import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='Parent'>
      <Card user='Raju' age={20} img='https://i.pinimg.com/736x/62/bc/f7/62bcf78d1399d9979b85d9e38118319d.jpg'/>
      <Card user='Rahul' age={19} img='https://i.pinimg.com/736x/eb/52/8d/eb528d3914ca0e957872920eb4cb35bc.jpg'/>
      <Card user='Naresh' age={29} img='https://i.pinimg.com/736x/eb/52/8d/eb528d3914ca0e957872920eb4cb35bc.jpg'/>
      
    </div>
  )
}

export default App