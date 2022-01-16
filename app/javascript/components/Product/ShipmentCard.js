import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    width: 20vw;
    padding: 5%;

    ${Card}:hover {
        border: 1px solid black;
    }
`

const New = styled.div`
    margin-top: 5px;
    text-align: left;
    padding-bottom: 5px;
    color: blue;
`

const IPR = styled.div`
    margin-top: 5px;
    text-align: left;
    padding-bottom: 5px;
    color: red;

     ${Card}:hover {
        border: 1px solid red
    }
`

const Arrived = styled.div`
    margin-top: 5px;
    text-align: left;
    padding-bottom: 5px;
    color: green;

     ${Card}:hover {
        border: 1px solid green
    }
`

const ShipmentText = styled.div`
    margin-top: 5px;
    text-align: left;
    padding-bottom: 5px;
    color: black;
`

const ShipmentStatus = styled.div`
    margin-top: 5px;
    text-align: left;
    padding-bottom: 5px;
    color: black;    
    font-weight: bold;
    font-size: 20px;
`

const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;
    a {
        color: #fff;
        background-color: #71b406;
        border-radius: 4px;
        padding: 10px 50px;
        cursor: pointer;
        border-radius: 3px;
        border: 1px solid #71b406;
        text-align: center;
        line-height: 20px;
        min-height: 40px;
        margin: 7px;
        font-weight: 600;
        text-decoration: none;
        width: 100%;
        transition: ease-in-out 0.1s;
        &:hover{
            border-color: #619a07;
            background: #619a07;
        }
    }
`

const ShipmentCard = (props) => {
    return (
        <Card>
            <ShipmentStatus>Shipment ID: </ShipmentStatus> <ShipmentText>{ props.id }</ShipmentText>
            <ShipmentStatus>Shipment Status: </ShipmentStatus>
            {props.attributes.status === "New" &&
                <New>{props.attributes.status}</New>
            }
            {props.attributes.status === "In Progress" &&
                <IPR>{props.attributes.status}</IPR>
            }
            {props.attributes.status === "Arrived" &&
                <Arrived>{props.attributes.status}</Arrived>
            } 
            <ShipmentStatus>Quantity: </ShipmentStatus>
                <ShipmentText>{ props.attributes.quantity }</ShipmentText>           
            <ShipmentStatus>To: </ShipmentStatus>
                <ShipmentText>{ props.attributes.to_name }</ShipmentText>
                <ShipmentText>{ props.attributes.to_addr }</ShipmentText>
                <ShipmentText>({props.attributes.to_phone.slice(0, 3)}) {props.attributes.to_phone.slice(3, 6)}-{props.attributes.to_phone.slice(6, 10)}</ShipmentText>
            <ShipmentStatus>Shipment Cost: </ShipmentStatus>
                <ShipmentText>${ (Math.round(props.attributes.cost * 100) / 100).toFixed(2) }</ShipmentText>
            <ShipmentStatus>Handled By: </ShipmentStatus>
                <ShipmentText>{ props.attributes.shipper_name }</ShipmentText>
                <ShipmentText>({props.attributes.shipper_phone.slice(0, 3)}) {props.attributes.shipper_phone.slice(3, 6)}-{props.attributes.shipper_phone.slice(6, 10)}</ShipmentText>
        </Card>
    )
}

export default ShipmentCard