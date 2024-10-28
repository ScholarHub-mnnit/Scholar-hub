import { useState } from 'react'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen'>
      <Home/>
  </div>
  )
}

export default App
