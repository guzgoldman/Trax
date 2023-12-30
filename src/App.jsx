import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import CartProvider from './components/CartProvider'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App