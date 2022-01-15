import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inventory from './Inventory/Inventory'
import Product from './Product/Product'

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Inventory />}/>
            <Route exact path="/inventory/:id" element={<Product />}/>
        </Routes>
    )
}

export default App
