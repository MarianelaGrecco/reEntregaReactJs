import React, { createContext, useState } from "react";



export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const index = cart.findIndex((cartItem) => cartItem.item.id === item.id);

    if (index === -1) {
      setCart([...cart, { item, quantity }]);
    } else {
      const newCart = [...cart];
      newCart[index].quantity += quantity;
      setCart(newCart);
    }
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter((cartItem) => cartItem.item.id !== itemId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
      0
    );
  };

  const handleCheckout = (order) => {
    db.collection("orders")
      .add(order)
      .then((docRef) => {
        console.log("Order submitted with ID: ", docRef.id);
        setCart([]);
      })
      .catch((error) => {
        console.error("Error adding order: ", error);
      });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
        handleCheckout,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};


