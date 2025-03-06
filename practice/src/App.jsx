import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <div style={{backgroundColor: "red"}}>tailwind</div>
        <div style={{backgroundColor: "green"}}>taillll</div>
        <div style={{backgroundColor: "orange"}}>windddd</div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-pink-500'>hellooo</div>
        <div className='bg-yellow-500'>hellooo</div>
        <div className='bg-blue-500'>hellooo there</div>
      </div>
    </>
  )
}

export default App
