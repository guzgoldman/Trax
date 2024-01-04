import React from 'react'
import Home from './Home'
import NoMatch from './NoMatch'
import { Routes, Route } from 'react-router-dom'
import Product from './Product'
import Cart from './Cart'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'

const Main = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/category/:cat" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NoMatch />} />
            <Route path='/cart' element={<Cart />}/>
        </Routes>
    )
}

export default Main
