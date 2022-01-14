import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Shipment = (props) => {

    const [shipment, setShipment] = useState({})
    const [shipmentInfo, setShipmentInfo] = useState({})

    useEffect(() => {
        const id = props.match.params.id
        const url = `api/v1/shipment/${id}`

        axios.get(shipment)
        .then( res => setShipment(res.data) )
        .catch( res => console.log(res) )
    }, [])

    return (
        <div className="wrapper">
            <div className="column">
                <div className="header"></div>
                <div className="reviews"></div> 
            </div>
            <div className="column">
                <div className="info-form">[Info form goes here]</div>
            </div>
        </div>
    )

export default Shipment