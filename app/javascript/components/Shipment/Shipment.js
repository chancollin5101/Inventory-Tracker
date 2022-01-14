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

        // previous shipments components
        /*<Card>
            <InventoryStatus>Status: </InventoryStatus>
            {props.attributes.status === "New" &&
                <New>{props.attributes.status}</New>
            }
            {props.attributes.status === "In Progress" &&
                <IPR>{props.attributes.status}</IPR>
            }
            {props.attributes.status === "Arrived" &&
                <Arrived>{props.attributes.status}</Arrived>
            }           
            <InventoryStatus>Employee Name: </InventoryStatus><InventoryText>{props.attributes.shipper_name}</InventoryText>
            <InventoryStatus>Employee Contact: </InventoryStatus><InventoryText>({props.attributes.shipper_phone.slice(0, 3)}) {props.attributes.shipper_phone.slice(3, 6)}-{props.attributes.shipper_phone.slice(6, 10)}</InventoryText>
            <InventoryStatus>Price: </InventoryStatus><InventoryText>${props.attributes.price}</InventoryText>
            <LinkWrapper>
                <Link to={`/inventory/${props.id}`}>View Shipment Details</Link>
            </LinkWrapper>
        </Card>*/
    )
}
export default Shipment