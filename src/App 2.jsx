import { useState } from 'react'
import Dashboard from './Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Dashboard />
  )
}

export default App
