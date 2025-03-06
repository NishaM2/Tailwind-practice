import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className='bg-red-500'>hi</div>
      <div className='bg-pink-500'>hi</div>
      <div className='bg-blue-500'>hi</div>
   </div>
  )
}

export default App
