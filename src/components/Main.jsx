import React from 'react'
import Home from './Home'
import NoMatch from './NoMatch'
import { Routes, Route } from 'react-router-dom'
import Product from './Product'
import AmpsProvider from './AmpsProvider'
import SpeakersProvider from './SpeakersProvider'
import TurntablesProvider from './TurntablesProvider'
import MerchProvider from './MerchProvider'
import Cart from './Cart'
import AmpsDetail from './AmpsDetail'
import SpeakersDetail from './SpeakersDetail'
import TurntablesDetail from './TurntablesDetail'
import MerchDetail from './MerchDetail'

const Main = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/speakers' element={<SpeakersProvider />}/>
            <Route path='/speakers/:id' element={<SpeakersDetail />} />
            <Route path='/turntables' element={<TurntablesProvider />}/>
            <Route path='/turntables/:id' element={<TurntablesDetail />} />
            <Route path='/amps' element={<AmpsProvider />}/>
            <Route path='/amps/:id' element={<AmpsDetail />} />
            <Route path='/merch' element={<MerchProvider />}/>
            <Route path='/merch/:id' element={<MerchDetail />} />
            <Route path="*" element={<NoMatch />} />
            <Route path='/product' element={<Product />}/>
            <Route path='/cart' element={<Cart />}/>
        </Routes>
    )
}

export default Main
