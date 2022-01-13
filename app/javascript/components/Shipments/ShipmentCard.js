import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    width: 20vw;

    ${Card}:hover {
        border: 1px solid black
    }
`
const ShipmentImg = styled.div`
    padding: 5% 10% 0 10%;

    img {
        height: 100px;
        width: 100%;
        border: 1px solid #efefef;
        object-fit: cover;
    }
`

const ShipmentText = styled.div`
    margin-top: 5px;
    margin-left: 10%;
    text-align: left;
    padding-bottom: 5px;
    color: black;
`

const New = styled.div`
    margin-top: 5px;
    margin-left: 10%;
    text-align: left;
    padding-bottom: 5px;
    color: blue;
`

const IPR = styled.div`
    margin-top: 5px;
    margin-left: 10%;
    text-align: left;
    padding-bottom: 5px;
    color: red;
`

const Arrived = styled.div`
    margin-top: 5px;
    margin-left: 10%;
    text-align: left;
    padding-bottom: 5px;
    color: green;
`

const ShipmentStatus = styled.div`
    margin-top: 5px;
    margin-left: 10%;
    text-align: left;
    padding-bottom: 5px;
    color: black;    
    font-weight: bold;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height:50px;
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
            <ShipmentImg>
                <img src={props.attributes.image_url} alt="shipment_img"/>
            </ShipmentImg>
            <ShipmentStatus>Status: </ShipmentStatus>
            {props.attributes.status === "New" &&
                <New>{props.attributes.status}</New>
            }
            {props.attributes.status === "In Progress" &&
                <IPR>{props.attributes.status}</IPR>
            }
            {props.attributes.status === "Arrived" &&
                <Arrived>{props.attributes.status}</Arrived>
            }           
            <ShipmentStatus>Employee Name: </ShipmentStatus><ShipmentText>{props.attributes.shipper_name}</ShipmentText>
            <ShipmentStatus>Employee Contact: </ShipmentStatus><ShipmentText>({props.attributes.shipper_phone.slice(0, 3)}) {props.attributes.shipper_phone.slice(3, 6)}-{props.attributes.shipper_phone.slice(6, 10)}</ShipmentText>
            <ShipmentStatus>Cost: </ShipmentStatus><ShipmentText>${props.attributes.cost}</ShipmentText>
            <LinkWrapper>
                <Link to={`/shipment/${props.id}`}>View Shipment Details</Link>
            </LinkWrapper>
        </Card>
    )
}

export default ShipmentCard