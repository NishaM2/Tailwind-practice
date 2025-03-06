import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='grid grid-cols-3'>
    <div className='bg-purple-500'>helloooo</div>
    <div className='bg-pink-500'>helloooo</div>
    <div className='bg-blue-500'>helloooo</div>
   </div>
  )
}

export default App
