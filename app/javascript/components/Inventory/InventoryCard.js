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

const SlugLabel = styled.input`
    display: none;
`

const InventoryCard = (props) => {
    const [showUpdate, setShowUpdate] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const prep = () => {
        props.beforeUpdate(props.id)
    }

    const clicked = () => {
        setShowUpdate(true)
        prep()
    }

    const confirmDelete = (e) => {
        props.subDelete(e, props.attributes.slug)
    }

    return (
        <Card>
            <InventoryStatus>{ props.attributes.title }</InventoryStatus>
            <InventoryText>{ props.attributes.description }</InventoryText>
            <InventoryStatus>Price: </InventoryStatus><InventoryText>${ (Math.round(props.attributes.price * 100) / 100).toFixed(2) }</InventoryText>
            <InventoryStatus>Inventory Count: </InventoryStatus><InventoryText>{ props.attributes.quantity }</InventoryText>
            <LinkWrapper>
                <Link to={`/inventory/${props.attributes.slug}`}>View Inventory</Link>
            </LinkWrapper>
            <UpdateButton>
                <a onClick={clicked}>Update Product</a>
                <ModalForm
                    onSubmit={props.subUpdate}
                    title="Update Product"
                    onClose={() => setShowUpdate(false)} 
                    show={showUpdate}
                >
                    <div>
                        <label>Product Title: </label>
                    </div> 
                    <div>
                        <input name="title" readOnly defaultValue={props.attributes.title} name="title" />
                    </div> 
                        
                    <div>
                        <label>Product Description: </label>
                    </div>
                    <div>
                        <textarea rows="10" cols="20" name="description" onChange={props.onChange.bind(this)} defaultValue={props.attributes.description} name="description"></textarea>
                    </div>

                    <div>
                        <label>Product Price: </label>
                    </div>
                    <div>
                        <input name="price" step='0.01' min="0" type="number" onChange={props.onChange.bind(this)} defaultValue={props.attributes.price} name="price"/>
                    </div>

                    <div>
                        <label>Inventory Quantity: </label>
                    </div>
                    <div>
                        <input tname="quantity" type="number" min="0" onChange={props.onChange.bind(this)} defaultValue={props.attributes.quantity} name="quantity"/>
                    </div>
                    <SlugLabel readOnly name="slug" value={props.attributes.slug}></SlugLabel>
                </ModalForm>
            </UpdateButton>
            <DeleteButton>
                <a onClick={() => setShowDelete(true)}>Delete Product</a>
                <ModalForm
                    onSubmit={confirmDelete}
                    title="Delete Product"
                    onClose={() => setShowDelete(false)} 
                    show={showDelete}
                >
                    <div className="form-group">
                        <label htmlFor="title">Are you sure you want to delete this product? (If there are shipments related to this product, it will also be deleted)</label>
                    </div> 
                </ModalForm>
            </DeleteButton>
        </Card>
    )
}

export default InventoryCard