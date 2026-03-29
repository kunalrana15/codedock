import { useState } from 'react'
import './App.css'
import { CreateProject } from './pages/CreateProject'
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<CreateProject />} />
    </Routes>
  )
}

export default App
