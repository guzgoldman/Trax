import React from 'react'
import Home from './Home'
import NotFound from './NotFound'
import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Checkout from './Checkout'

const Main = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/category/:cat" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>
        </Routes>
    )
}

export default Main
