import React, { createContext } from 'react';
import useCart from './useCart';

export const CartContext = createContext();
export const CartProvider = props => {
    return (
        <CartContext.Provider value={{ ...useCart() }}>
            {props.children}
        </CartContext.Provider>
    )
}