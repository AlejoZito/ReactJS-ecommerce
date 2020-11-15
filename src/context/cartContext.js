import React, { useContext, useEffect, useState } from 'react'

export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext);

//High order component
export const CartProvider = ({ children, defaultValue }) => {
    const [totalItemCount, setTotalItemCount] = useState(0);
    const [itemsInCart, setItemsInCart] = useState(defaultValue);

    function add(item, quantity) {
        const newCart = [...itemsInCart];

        const itemWithQuantity = { ...item, quantity: quantity };

        const i= newCart.findIndex(itemInCart => itemInCart.id == item.id);

        if (i > -1) {
            newCart[i] = itemWithQuantity;
        } else {
            newCart.push(itemWithQuantity);
        }

        setItemsInCart(newCart);
        updateItemCount(newCart);
    }

    function remove(itemId) {
        if (itemsInCart.length > 0) {
            const newCart = itemsInCart.filter(item => item.id != itemId);
            setItemsInCart(newCart);
            updateItemCount(newCart);
        }
    }

    //Actualizar cantidad total al modificar el carrito
    function updateItemCount(items) {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].quantity;
        }
        setTotalItemCount(sum);
    }

    //Nuestro almacen de estado de la compra
    //Funciona como nuestra propia API
    return <CartContext.Provider value={{ itemsInCart, totalItemCount, add, remove }}>
        {children}
    </CartContext.Provider>
}