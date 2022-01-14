import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inventory from './Inventory/Inventory'
import Shipment from './Shipment/Shipment'

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Inventory />}/>
            <Route exact path="shipment/:id" element={<Shipment />}/>
        </Routes>
    )
}

export default App
