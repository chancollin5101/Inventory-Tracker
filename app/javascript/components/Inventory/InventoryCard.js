import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ModalForm from '../Modal/ModalForm'


const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    width: 20vw;
    padding: 5%;

    ${Card}:hover {
        border: 1px solid black
    }
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

const UpdateButton = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;
    a {
        color: #fff;
        background-color: #267cff;
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
            background: #1d5ec2;
        }
    }
`

const DeleteButton = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;
    a {
        color: #fff;
        background-color: #ff2929;
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
            background: #c21d1d;
        }
    }
`

const InventoryCard = (props) => {
    const [showUpdate, setShowUpdate] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    return (
        <Card>
            <InventoryStatus>{ props.attributes.title }</InventoryStatus>
            <InventoryText>{ props.attributes.description }</InventoryText>
            <InventoryStatus>Price: </InventoryStatus><InventoryText>${ props.attributes.price }</InventoryText>
            <InventoryStatus>Inventory Count: </InventoryStatus><InventoryText>{ props.attributes.quantity }</InventoryText>
            <LinkWrapper>
                <Link to={`/inventory/${props.attributes.slug}`}>View Inventory</Link>
            </LinkWrapper>
            <UpdateButton>
                <a onClick={() => setShowUpdate(true)}>Update Product</a>
                <ModalForm
                    title="Update Product"
                    onClose={() => setShowUpdate(false)} 
                    show={showUpdate}
                >
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Product Title: </label>
                            <input id="title" />
                        </div> 
                        
                        <div className="form-group">
                            <label htmlFor="description">Product Description: </label>
                            <input type="text" id="description" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Product Price: </label>
                            <input id="price" placeholder="$" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="quantity">Inventory Quantity: </label>
                            <input id="quantity" />
                        </div>
                    </form>
                </ModalForm>
            </UpdateButton>
            <DeleteButton>
                <a onClick={() => setShowDelete(true)}>Delete Product</a>
                <ModalForm
                    title="Delete Product"
                    onClose={() => setShowDelete(false)} 
                    show={showDelete}
                >
                    <div className="form-group">
                        <label htmlFor="title">Are you sure you want to delete this product? </label>
                    </div> 
                </ModalForm>
            </DeleteButton>
        </Card>
    )
}

export default InventoryCard