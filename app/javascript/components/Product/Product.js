import React, { useState, useEffect, Fragment } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'
import ShipmentCard from './ShipmentCard'
import ModalForm from '../Modal/ModalForm'

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

const AddButton = styled.button`
    background-color: #71b406;
    color: white;
    border: none;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 10px;
    transition: ease-in-out 0.1s;
    &:hover{
        border-color: #619a07;
        background: #619a07;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin-top: 30px;
    margin-left: 2vw;
`

const Product = (props) => {
    const [product, setProduct] = useState({})
    const [shipmentInfo, setShipmentInfo] = useState({})
    const [shipment, setShipment] = useState({})
    const [hasLoaded, setLoaded] = useState(false)
    const [show, setShow] = useState(false)

    const backTxt = "<-- Back to Inventory"
    
    const { id } = useParams()

    useEffect(() => {
        //const slug = props.match.params.slug
        const url = `/api/v1/inventory/${id}`

        axios.get(url)
        .then( res => {
            setProduct(res.data)
            setShipmentInfo(res.data.included)
            setLoaded(true)
        })
        .catch( res => console.log(res) )
    }, [])

    const grid = Array.from(shipmentInfo).map( item => {
        return (
        <ShipmentCard
            //onChange={handleChange}
            //beforeUpdate={setupInventoryForUpdate}
            //subUpdate={handleUpdate}
            //subDelete={handleDelete}
            key={item.id}
            attributes={item.attributes}
            id={item.id}
            max_quantity={product.data.attributes.quantity}
        />)
    })

    const handleChange = (e) => {
        e.preventDefault()

        setShipment(Object.assign({}, shipment, {[e.target.name]: e.target.value}))
    }

    // Create a new Inventory record
    const handleSubmit = (e) => {
        e.preventDefault()

        const inventory_id = product.data.id 
        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        axios.post('/api/v1/shipment', {shipment, inventory_id})
        .then(res => {
            debugger
            // updating Inventory quantity on client side
            const newCount = product.data.attributes.quantity-e.target.querySelector('[name=quantity]').value
            product.data.attributes.quantity = newCount
            setProduct(product)

            const addRes = [...shipmentInfo, res.data.data]
            setShipmentInfo(addRes)

            setShipment(
                {
                    quantity: 0, 
                    status: '', 
                    shipper_name: '',
                    shipper_phone: '',
                    to_name: '',
                    to_addr: '',
                    to_phone: '',
                    cost: 0
                })
            setShow(false)
        })
        .catch(res => {})
    }

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
                <Fragment>
                    <ProductCard>
                        <InventoryStatus>{ product.data.attributes.title }</InventoryStatus>
                        <InventoryText>{ product.data.attributes.description }</InventoryText>
                        <InventoryStatus>Price: </InventoryStatus><InventoryText>${ product.data.attributes.price }</InventoryText>
                        <InventoryStatus>Inventory Count: </InventoryStatus><InventoryText>{ product.data.attributes.quantity }</InventoryText>
                        <AddButton 
                            onClick={() => setShow(true) 
                        }>
                            + Ship Product
                        </AddButton>
                        <ModalForm
                            onSubmit={handleSubmit}
                            title="Create new Shipment"
                            onClose={() => setShow(false)} 
                            show={show}
                        >
                            <div>
                                <label>Status: </label>
                            </div>
                            <div>
                                <input onChange={handleChange} value="New" name="status" required />
                            </div>
                            <div>    
                                <label>Shipment Quantity: </label>
                            </div>
                            <div>    
                                <input onChange={handleChange} type="number" max={product.data.attributes.quantity} value={shipmentInfo.quantity} name="quantity" required />
                            </div>
                            <div>
                                <label>Assign to </label>
                            </div>
                            <div>
                                <label>Name: </label>
                            </div>
                            <div>
                                <input onChange={handleChange} value={shipmentInfo.shipper_name} name="shipper_name" required/>
                            </div>
                            <div>
                                <label>Phone Number: </label>
                            </div>
                            <div>
                                <input onChange={handleChange} value={shipmentInfo.shipper_phone} name="shipper_phone" required/>
                            </div>
                            <div>
                                <label>To </label>
                            </div>
                            <div>
                                <label>Name: </label>
                            </div>
                            <div>
                                <input onChange={handleChange} value={shipmentInfo.to_name} name="to_name" required/>
                            </div>
                            <div>
                                <label>Address: </label>
                            </div>
                            <div>
                                <input onChange={handleChange} value={shipmentInfo.to_addr} name="to_addr" required/>
                            </div>
                            <div>
                                <label>Phone Number: </label>
                            </div>
                            <div>
                                <input onChange={handleChange} value={shipmentInfo.to_phone} name="to_phone" required/>
                            </div>
                            <div>
                                <label>Shipment Cost: </label>
                            </div>
                            <div>
                                <input onChange={handleChange} step=".01" type="number" value={shipmentInfo.cost} name="cost" required/>
                            </div>
                        </ModalForm>
                    </ProductCard>
                    <Grid>
                        {grid}
                    </Grid>
                </Fragment>
            }
        </Wrapper>

        // previous shipments components
//<ShipmentText>{ shipmentInfo.attributes.from_name }</ShipmentText>
//<ShipmentText>{ shipmentInfo.data.attributes.from_addr }</ShipmentText>
                    //<ShipmentText>({shipmentInfo.data.attributes.from_phone.slice(0, 3)}) {shipmentInfo.data.attributes.from_phone.slice(3, 6)}-{shipmentInfo.data.attributes.from_phone.slice(6, 10)}</ShipmentText>

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