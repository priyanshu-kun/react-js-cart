import React, { useState } from 'react';
import "../styles/cart.css";

export default function Cart(props) {

    // const { images, name, price } = props.cartdata;
    console.log(props.cartdata)

    const handleRemoveItem = (id) => {
        props.removeItemFromCart(id)
    }

    const getTotal = () => {
        if (props.cartdata.length === 0) {
            return null;
        }
        const total = props.cartdata.reduce((acu, num) => {
            return acu + num.price.value;
        }, 0)
        console.log("Total: ", total)

        return total;
    }

    return (
        <div className="cart-wrapper">
            <div className="cart-items">
                {
                    !props.cartdata.length ? <div ><h1 style={{ fontSize: "2rem", fontFamily: "sans-serif", color: "red", textTransform: "uppercase", fontWeight: "bold", opacity: "0.6" }}>Your Cart is empty</h1></div> : props.cartdata.map(cartobj => {
                        return <div className="cart-list">
                            <div>
                                <img src={cartobj.images[0].url} alt="img" />
                                <div className="object-data">
                                    <h1>{cartobj.name}</h1>
                                    <p>${cartobj.price.value}</p>
                                </div>
                            </div>
                            <button className="btn" onClick={() => {
                                handleRemoveItem(cartobj.code)
                            }}>Remove</button>

                        </div>
                    })
                }
            </div>
            <div className="cart-total">
                <h1>Total: <span>${!getTotal() ? "0" : getTotal()}</span></h1>
                <button style={{ background: "rgb(0, 255, 0)" }} className="btn">Checkout</button>
            </div>
        </div>
    )
}