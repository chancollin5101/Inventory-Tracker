import React, {useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import InventoryCard from './InventoryCard'
import ModalForm from '../Modal/ModalForm'

const Home = styled.div`
    text-align: center;
    margin-left: auto;
    font-family: 'Trebuchet MS', sans-serif;
`

const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 40px;
    }
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

const Inventory = () => {
    const [currInventory, setCurrInventory] = useState([])
    const [inventory, setInventory] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        // fetch all shipments from api and update state
        axios.get('/api/v1/inventory.json')
        .then( res => {
            setCurrInventory(res.data.data)
        })
        .catch( res => console.log(res) )
    }, [currInventory.length])

    const handleChange = (e) => {
        e.preventDefault()

        setInventory(Object.assign({}, inventory, {[e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
       
        axios.post('/api/v1/inventory', {inventory})
        .then(res => {
            const addRes = [...currInventory, res.data]
            setCurrInventory({...currInventory, addRes})
            setInventory({title: '', description: '', price: 0, quantity: 0})
            setShow(false)
        })
        .catch(res => {})
    }

    const grid = Array.from(currInventory).map( item => {
        return (
        <InventoryCard 
            key={item.id}
            attributes={item.attributes}
            id={item.id}
        />)
    })

    return (
        <Home>
            <Header>
                <h1>Inventory Tracker</h1>
                <AddButton 
                    onClick={() => setShow(true) 
                }>
                    + Add Product
                </AddButton>

                <ModalForm
                    onSubmit={handleSubmit}
                    title="Create new Product"
                    onClose={() => setShow(false)} 
                    show={show}
                >
                    <div className="form-group">
                        <label>Product Title: </label>
                        <input onChange={handleChange} value={currInventory.title} name="title" />
                    </div> 
                        
                    <div className="form-group">
                        <label>Product Description: </label>
                        <input onChange={handleChange} value={currInventory.description} name="description" />
                    </div>

                    <div className="form-group">
                        <label>Product Price: </label>
                        <input onChange={handleChange} type="number" value={currInventory.price} name="price" placeholder="$" />
                   </div>

                    <div className="form-group">
                        <label>Inventory Quantity: </label>
                        <input onChange={handleChange} type="number" value={currInventory.quantity} name="quantity" />
                    </div>
                </ModalForm>
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Inventory