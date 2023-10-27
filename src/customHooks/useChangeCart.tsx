
import React, { useContext, useState } from 'react';

import { saveCart, fetchUserCart, fetchSingleProduct } from './cartAPI';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { ICartProduct, IProduct } from '../Types';


const useChangeCart = () => {

    const {cartItems, dispatchCart} = useContext(CartContext);
    const {user } = useContext(AuthContext);

    const addItemToCart = ( product: IProduct, quantity: number, selectColor: string, selectSize: string) => { 

        // debugger;

    const cartProduct : ICartProduct = {
            _id : product._id,
            title : product.title,
            img : product.img,
            key : product._id + '&' + selectColor + '&' + selectSize,
            color: selectColor,
            size: selectSize,
            price: product.price
        }

        // check if product already in cart
        const index = cartItems.findIndex( item => item.product.key === cartProduct.key);

        if (index > -1) {
            // if product already in cart => update quantity
            dispatchCart({
                type: 'UPDATE_ONE',
                payload: {
                    product: cartProduct,
                    quantity: quantity + cartItems[index].quantity
                }
            });

            dispatchCart({type: 'UPDATE_TOTAL_PRICE'})

        } else {
            // if product not already in cart => add to cart
            dispatchCart({
                type: 'ADD_ONE',
                payload: {
                    product: cartProduct,
                    quantity: quantity,
                }
            });

            dispatchCart({type: 'UPDATE_TOTAL_PRICE'})

        }
        
    }

    const removeItemFromCart = ( key: string) => { 

        // check if product already in cart
        const index = cartItems.findIndex( item => item.product.key === key);

        if (index > -1) {
            dispatchCart({
                type: 'REMOVE_ONE',
                payload: {
                    key
                }
            });

            dispatchCart({type: 'UPDATE_TOTAL_PRICE'})

        } 

    }


  return {addItemToCart, removeItemFromCart}
}

export default useChangeCart