import React, {useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ShipmentCard from './ShipmentCard'

const Home = styled.div`
    text-align: center;
    margin-left: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 40px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 200;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin-top: 30px;
    margin-left: 2vw;
`

const Shipments = () => {
    const [shipments, setShipments] = useState([])

    useEffect(() => {
        // fetch all shipments from api and update state
        axios.get('/api/v1/shipment.json')
        .then( res => {
            setShipments(res.data.data)
        })
        .catch( res => console.log(res) )
    }, [shipments.length])


    const grid = shipments.map( item => {
        return (
        <ShipmentCard 
            key={item.id}
            attributes={item.attributes}
            id={item.id}
        />)
    })

    return (
        <Home>
            <Header>
                <h1>Chan Logistics</h1>
                <Subheader>Inventory Tracking System</Subheader>
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Shipments