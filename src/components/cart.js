import React, { useState } from 'react';
import Navbar from "./navbar";
import "../styles/cart.css";

export default function Cart(props) {
    return (
        <div className="App">
            <Navbar />
            <div className="cart-wrapper">
                <div className="cart-items">

                </div>
                <div className="cart-total">
                    <h1>Total: <span>$1000</span></h1>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}