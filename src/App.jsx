import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CheckoutPage from './pages/CheckoutPage'




function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/checkout' element={<CheckoutPage/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
