import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shipments from './Shipments/Shipments'
import Shipment from './Shipment/Shipment'

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Shipments />}/>
            <Route exact path="shipment/:id" element={<Shipment />}/>
        </Routes>
    )
}

export default App
