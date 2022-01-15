import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


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
                <a>Update Product</a>
            </UpdateButton>
            <DeleteButton>
                <a>Delete Product</a>
            </DeleteButton>
        </Card>
    )
}

export default InventoryCard