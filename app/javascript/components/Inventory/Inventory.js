import React, {useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import InventoryCard from './InventoryCard'
import ModalForm from '../Modal/ModalForm'

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

const Inventory = () => {
    const [inventory, setInventory] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        // fetch all shipments from api and update state
        axios.get('/api/v1/inventory.json')
        .then( res => {
            setInventory(res.data.data)
        })
        .catch( res => console.log(res) )
    }, [inventory.length])


    const grid = inventory.map( item => {
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
                <h1>Chan Logistics</h1>
                <Subheader>Inventory Tracking System</Subheader>
                <button 
                    onClick={() => setShow(true) 
                }>
                    + Add
                </button>
                <ModalForm
                    onClose={() => setShow(false)} 
                    show={show}
                >
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Product Title: </label>
                            <input className="form-control" id="title" />
                        </div> 
                        
                        <div className="form-group">
                            <label htmlFor="description">Product Description: </label>
                            <input className="form-control" id="description" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Product Price: </label>
                            <input className="form-control" id="price" placeholder="$" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="quantity">Inventory Quantity: </label>
                            <input className="form-control" id="quantity" />
                        </div>

                        <div className="form-group">
                            <button className="form-control" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </ModalForm>
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Inventory