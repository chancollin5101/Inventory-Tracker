import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
    font-family: 'Trebuchet MS', sans-serif;
`
const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #71b406;
    padding-bottom: 10px;
    text-align: center;
    h1 {
        font-size: 40px;
        color: white;
    }

    ul {
        list-style-type: none;
    }

    li {
        float: left;
    }

    li a {
        text-decoration: none;
        color: white;
        font-weight: bold;    }

    li a:hover {
        color: lightgrey;
    }
`
const ProductCard = styled.div`
    border: 1px solid black;
    background: #fff;
    width: 80%;
    padding-left: 10px;
    margin-left: 10%;
    margin-top: 10%;
`

const InventoryText = styled.div`
    margin-top: 5px;
    text-align: left;
    padding-bottom: 5px;
    color: black;
`

const InventoryStatus = styled.div`
    margin-top: 5px;
    text-align: left;
    padding-bottom: 5px;
    color: black;    
    font-weight: bold;
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
`

const Arrived = styled.div`
    margin-top: 5px;
    text-align: left;
    padding-bottom: 5px;
    color: green;
`

const Product = (props) => {

    const [product, setProduct] = useState({})
    const [shipmentInfo, setShipmentInfo] = useState({})
    const [hasLoaded, setLoaded] = useState(false)

    const backTxt = "<-- Back to Inventory"
    
    const { id } = useParams()

    useEffect(() => {
        //const slug = props.match.params.slug
        const url = `/api/v1/inventory/${id}`

        axios.get(url)
        .then( res => {
            setProduct(res.data)
            setLoaded(true)
        })
        .catch( res => console.log(res) )
    }, [])

    return (
        <Wrapper>
            <Header>
                <h1>Product Info</h1>
                <ul>
                    <li><Link to="/">{backTxt}</Link></li>
                </ul>
            </Header>
            {
                hasLoaded &&
                <ProductCard>
                    <InventoryStatus>{ product.data.attributes.title }</InventoryStatus>
                    <InventoryText>{ product.data.attributes.description }</InventoryText>
                    <InventoryStatus>Price: </InventoryStatus><InventoryText>${ product.data.attributes.price }</InventoryText>
                    <InventoryStatus>Inventory Count: </InventoryStatus><InventoryText>{ product.data.attributes.quantity }</InventoryText>
                </ProductCard>
            }
        </Wrapper>

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
export default Product