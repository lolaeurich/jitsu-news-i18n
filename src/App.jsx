import { useState } from 'react'
import BlogContent from './pages/BlogContent'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog/:id' element={<BlogContent />}></Route>
      </Routes>
    </div>
  )
}

export default App
