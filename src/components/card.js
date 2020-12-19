import React, { useState } from 'react';
import "../styles/card.css";

export default function Card(props) {

    const { images, name, price, code } = props.product;
    // const { handleAddToCart } = ;

    const handleClick = () => {
        const obj = {
            images,
            name,
            price,
            itemCount: 0
        }
        props.handleAddToCart(obj);
    }

    return (
        <div className="card-body">
            <div className="card-img">
                <img src={images[0].url} alt={`${name}-img`} />
            </div>
            <div className="card-data">
                <h1>{name}</h1>
                <span>{price.value}</span>
            </div>
            <button className="btn" onClick={handleClick}>Add to Cart</button>
        </div>
    )
}