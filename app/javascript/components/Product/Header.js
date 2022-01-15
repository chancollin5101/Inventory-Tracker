import React from 'react'

const Header = (props) => {
    return (
        <div className="wrapper">
            <h1>{props.attributes.title}</h1>
            <h2>{props.attributes.description}</h2>
            <div>
                <div className="price">Price: {props.attributes.price}</div>
                <div className="stock">{props.attributes.quantity}</div>
            </div>
        </div>
    )
}

export default Header