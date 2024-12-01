import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import Home from './Home'
import Quotes from './Quotes'
import Love from './Love'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Quotes" element={<Quotes/>}></Route>
      <Route path="/Love" element={<Love/>}></Route>
    </Routes>
  )
}

export default App
